(ns clj-nlp.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [clj-nlp.core-test]))

(enable-console-print!)

(doo-tests 'clj-nlp.core-test)
