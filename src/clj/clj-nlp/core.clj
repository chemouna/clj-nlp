(ns clj-nlp.core
  (:use [ring.middleware.keyword-params]
        [ring.middleware.json]
        [ring.middleware.params :only [wrap-params]]
        [ring.util.response :only [response]]
        [ring.adapter.jetty])
  (:require [clj-nlp.trip :as trip]
            [clj-nlp.parser :as parser]
            [compojure.core :refer (defroutes GET POST PUT DELETE)]
            [compojure.route :refer (not-found)]
            [clojure.tools.trace :as ct]))

(defroutes routes
           (GET "/find" [message] (response {:parsed-trips-results (trip/find-trip message)}))
           (GET "/parse" [message] (response {:parsed-message (parser/parse-message message)}) {:debug true}) ;; not sure i need this :body here
           (GET "/test/10" [] "Test Page 10" {:debug true})
           (not-found
             {:status 404
              :body   {:message "Route not found"}}))

(def app
  (-> routes
      wrap-keyword-params
      wrap-json-body
      wrap-json-response))




