(ns clj-nlp.trip
  (:use [clojure.pprint :as pp])
  (:require [clj-nlp.parser :as parser]
            [clj-http.client :as http]
            [cheshire.core :as json]
            [clojure.tools.trace :as ct]
            [clojure.string :as cs]
            [clojure.data.codec.base64 :as b64]))

(def base "google_maps_api_url")
(def access-token "GOOGLE_MAPS_ACCESS_TOKEN")
(def marge-hour-be 2)

;(defn find-trip [str]
;   (parser/parse-message str))

;; TODO: put these in util
;; TODO after parsing send the results as a requestb


(defn parse-int [s]
  (if (= "" (cs/trim s))
    ""
    (Integer. (re-find #"[0-9]*" s))))


(defn price-to-int [str-price]
  (map read-string (re-seq #"[\d.]+" str-price)))

(defn parse-price [price-arr]
  (if (< (count price-arr) 1)
    ""
    (price-to-int (first price-arr))))

(defn parse-hour-from-date
  [date-str]
  (let [p (cs/split date-str #" at ")]
    (if (< (count p) 2) "" (second p))))

(defn hour-end-for-begin-hour
  [hb-str]
  (let [hb (parse-hour-from-date hb-str)]
    (if (= "" hb)
      ""
      (+ (parse-int hb) marge-hour-be))))


;; (if (boolean (re-find #"less than"
;; parse-price
;(defn get-min-max-price
;  [price-arr message]
;  (if (boolean (re-find #"less than" message))
;    (let [vmax (parse-price price-arr)]
;      [vmax (if (= "" vmax) "" (- vmax 10))]))                ;; pb here
;  (if (boolean (re-find #"more than" message))
;    (let [vmin (ct/trace (parse-price price-arr))]
;      {:pmin vmin
;       :pmax (if (= "" vmin) "" (+ vmin 10))}))
;  (if (boolean (re-find #"for" message))
;    (let [veq (ct/trace parse-price price-arr)]
;      {:pmax veq :pmin veq})))


(defn get-min-max-price
  [price-arr message]
  (cond
    (boolean (re-find #"less than" message)) {:pmax (first (parse-price price-arr)) :pmin (if (= "" (parse-price price-arr)) "" (- (first (parse-price price-arr)) 10))}

    (boolean (re-find #"more than" message)) {:pmin (first (parse-price price-arr)) :pmax (if (= "" (parse-price price-arr)) "" (+ (first (parse-price price-arr)) 10))}

    :else (let [veq (parse-price price-arr)] {:pmax veq :pmin veq})))


;; handle case where there's no at
(defn parse-date-from-date
  [date-str]
  (let [p (cs/split date-str #" at ")]
    (if (< (count p) 1) "" (first p))))


(defn geocode [access-token address]
  (-> (http/get (str base "geocode")
                {:query-params {:access_token access-token
                                :address      address}})
      :body
      json/parse-string))

(defn pt-coord [geocode-result name]
  (format "%.3f" (get-in geocode-result ["results" 0 "geometry" "location" name])))

;; for now we're doing it two times -> TODO: refactor it
(defn coordinates [access-token address]
  (let [gc (geocode access-token address)]
    (str (pt-coord gc "lat")
         "|" (pt-coord gc "lng"))))                             ;; we may need to truncate them

;; let's see if parse-message gets us all data needed by trips;; for now we arent supporting any roundtrip & only price max
(defn trips [access-token from-name to-name date-begin price-max price-min hour-begin hour-end]
  (-> (http/get (str base "trips")
                (ct/trace {:query-params {:access_token access-token
                                          :_format "json"
                                          :locale "en_GB"
                                          :cur "GBP"
                                          :fn from-name
                                          :tn to-name
                                          :db date-begin
                                          :pmax price-max
                                          :pmin price-min
                                          :hb hour-begin
                                          :he hour-end
                                          :seats "1"}}))
      :body
      json/parse-string))


(defn tripfind-parsed [result message]
  (pprint " Im here 1")
  (trips access-token
         (first (:locations result))
         (second (:locations result))
         (parse-date-from-date (:starts-at result))
         (:pmax (get-min-max-price (:price result) message))    ;;pmax
         (:pmin (get-min-max-price (:price result) message))    ;;pmin its here the difference for less than
         (parse-int (parse-hour-from-date (:starts-at result)))
         (hour-end-for-begin-hour (:starts-at result))))

;; this causes pbms when there's no access token
(defn find-trip [message]
  (pprint (str " Im here 2 & str to parse " message))
  (tripfind-parsed (parser/parse-message message) message))


; (def gv (geocode access-token "Paris"))
; (get-in (geocode access-token "Paris") ["results" 0 "address_components"])
;
; (get-in gv ["results" 0 "geometry" "location" "lat"])
; (get-in gv ["results" 0 "geometry" "location" "lng"])


; @Query(ACCESS_TOKEN) String accessToken, @Query("address") String input
; exple that works
; (find-trip "Reserve a trip with John Oliver on 21 June 2016 at 11pm London to Manchester for $ 40")
; take the data from this and do an api call to blablacar api -> how ?
; then redirect that result back to user with one response


;(defn string-to-base64-string [original] (String. (b64/encode (.getBytes original)) "UTF-8"))
;(string-to-base64-string "01194c6a7055f0e6d1c3d71ecf520059e7692425d27c66dee3c621bf5bfa22bd:d70b3146a17443e2b6beade49c3eafbc65dfa88ec6d0800a67e935a47336cb96")
