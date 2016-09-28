(ns clj-nlp.parser
  (:use [clojure.pprint :as pp]
        [opennlp.nlp])
  (:require
    [clj-nlp.time :as xtime]
    [clojure.string :only [split replace] :as str]
    [clj-time.format :as ttf]
    [clj-time.local :as l]
    [clj-time.core :as tt :exclude [second]]
    [taoensso.timbre :as timbre]
    [clojure.tools.trace :as ct])
  (:gen-class))

(def get-sentences (delay (make-sentence-detector "models/en-sent.bin")))
(def tokenize (delay (make-tokenizer "models/en-token.bin")))
(def detokenize (delay (make-detokenizer "models/english-detokenizer.xml")))
(def pos-tag (delay (make-pos-tagger "models/en-pos-maxent.bin")))
(def name-find (delay (make-name-finder "models/namefind/en-ner-person.bin")))
(def duration-find (delay (make-name-finder "models/en-duration.bin")))
(def money-find (delay (make-name-finder "models/en-ner-money.bin")))
(def location-find (delay (make-name-finder "models/en-ner-location.bin")))

(defn find-persons
  "Finds any properly capitalized names from a tokenized sentence."
  [tokens]
  (@name-find tokens))

(defn first-or-empty-default [coll x]
  (if (not (empty? coll))
    (first coll)
    x))

(defn parse-duration
  [tokens]
  (let [duration-tokens (str/split
                          (first-or-empty-default (@duration-find tokens) "") #"\s+")]
    {:length (first duration-tokens) :time-unit (second duration-tokens)}))

(defn find-price
  "Finds price of trips."
  [tokens]
  (@money-find tokens))

(defn find-places
  "Finds places requested."
  [tokens]
  (@location-find tokens))


(defn parse-message
  "Parse the message and extract people and start time for the calendar event.
   Return a map with {:people :starts-at}."
  [s]
  (pprint " Im here 4")
  (let [tokens (@tokenize s)
        people (ct/trace (find-persons tokens))
        starts-at (xtime/clean-datetime
                    (xtime/stringify-datetime-tokens
                      (xtime/find-datetime-tokens tokens)))
        duration (ct/trace (parse-duration tokens)) ;; pb in parse-duration
        price (find-price tokens)
        locations (find-places tokens)]
    {:people people :starts-at starts-at :duration duration :price price :locations locations}))


;; (parse-message "Meeting with John Oliver on 20th Juin 2016 at rue Edouard caleb")
