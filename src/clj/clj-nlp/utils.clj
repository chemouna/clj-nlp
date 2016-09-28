(ns clj-nlp.utils)

(def +digit-chars+ #{\0 \1 \2 \3 \4 \5 \6 \7 \8 \9})

(defn just-decimal [string]
        (cond (string? string)
              (apply str (filter (fn [char]
                                   (or (some +digit-chars+ char)
                                       (= \. char)))
                                 (str string)))
              (number? string)
              string))

(defn format-money [amount]
        (if (string? amount)
          (let [amount (if (#{\¢ \c} (last (.trim amount)))
                         (/ (just-decimal amount) 100.0)
                         (just-decimal amount))]
            (format-money (Float/parseFloat amount)))

          (cond
            (integer? amount)
            (str "$ " amount ".")

            (> 1 amount)
            (str (* 100 amount) " ¢")

            (zero? amount)
            nil

            true
            (str "$ " (.toFixed amount 2)))))

