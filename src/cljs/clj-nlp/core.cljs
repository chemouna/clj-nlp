(ns clj-nlp.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljsjs.material-ui]
            [cljs-react-material-ui.core :as ui]
            [cljs-react-material-ui.icons :as ic]))

(enable-console-print!)

(defonce app-state (atom {:list ["Paris" "Nantes" "Lille"]}))

(defn root-component [app owner]
  (reify
    om/IRender
    (render [_]
      (dom/div nil (dom/h1 nil (:text app)))))) ; maybe just render the edittext here

(defn list-component [data owner]
  (om/component
    (apply dom/ul nil
      (map (fn [text] (dom/li nil text))
           (:list data)))))


(om/root
 ;root-component
 list-component
 app-state
 {:target (js/document.getElementById "app")})
