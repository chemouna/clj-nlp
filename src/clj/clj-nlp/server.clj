(ns clj-nlp.server
  (:use [ring.middleware.keyword-params]
        [ring.middleware.json]
        [ring.middleware.params :only [wrap-params]]
        [ring.util.response :only [response]])
  (:require [clojure.java.io :as io]
            [clj-nlp.trip :as trip]
            [clj-nlp.parser :as parser]
            [compojure.core :refer [ANY GET PUT POST DELETE defroutes]]
            [compojure.route :refer [resources]]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.middleware.gzip :refer [wrap-gzip]]
            [ring.middleware.logger :refer [wrap-with-logger]]
            [environ.core :refer [env]]
            [ring.util.response :only [response]]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.reload :refer [wrap-reload]])
  (:gen-class))

;(defroutes routes
;  (GET "/" _
;    {:status 200
;     :headers {"Content-Type" "text/html; charset=utf-8"}
;     :body (io/input-stream (io/resource "public/index.html"))})
;  (resources "/"))

(defroutes routes
           (GET "/find" [message] (response {:parsed-trips-results (trip/find-trip message)})) ;; instead of response use
           (GET "/parse" [message] (response {:parsed-message (parser/parse-message message)}) {:debug true}) ;; not sure i need this :body here
           (GET "/test/10" [] "Test Page 10" {:debug true})
           (GET "/" _
             {:status 200
              :headers {"Content-Type" "text/html; charset=utf-8"}
              :body (io/input-stream (io/resource "public/index.html"))}))


(def http-handler
  (-> routes
      (wrap-defaults api-defaults)
      wrap-with-logger
      wrap-gzip
      wrap-keyword-params
      wrap-json-body
      wrap-json-response))

(defn -main [& [port]]
  (let [port (Integer. (or port (env :port) 10555))]
    (run-jetty http-handler {:port port :join? false})))
