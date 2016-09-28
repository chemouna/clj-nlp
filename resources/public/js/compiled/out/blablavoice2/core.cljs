(ns clj-nlp.core
  (:require [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(enable-console-print!)

(def base "http://localhost:3001/") ;same server!

(defonce app-state (atom {:list ["Paris" "Nantes" "Lille"]}))

(defn root-component [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil (dom/h1 nil (:text app)))))) ; maybe just render the edittext here


(defn find [message]
  (go (let [response (<! (http/get (str base "find")
                                   {:query-params {:message message}}))]
        ;;enjoy your data
        (js/console.log (:body response)))))

(defn list-component [data owner]
  (om/component
    (apply dom/ul nil
      (map (fn [text] (dom/li nil text))
           (:list data)))
    (dom/label #js {:htmlFor "search"} "Search:")
    (dom/input #js {:key   "search-field"
                    :value ""
                    :id "search-field"
                    :on-key-press (fn [e]
                                    (println "key press" (.-charCode e))
                                    (if (= 13 (.-charCode e))
                                      (find (.-value (js/document.getElementById "search-field"))) ;; call a function here that does request to server
                                      (println "NOT ENTER")))})))


(om/root
 ;root-component
 list-component
 app-state
 {:target (js/document.getElementById "app")})