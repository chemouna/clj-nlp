(ns figwheel.connect (:require [clj-nlp.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:build-id "app", :websocket-url "ws://localhost:3002/figwheel-ws"})

