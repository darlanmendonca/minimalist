#!/bin/bash

set -e

cat components/**/*.scss | node-sass --output-style compressed > docs/vendor.css

node-sass hotsite/app.scss docs/app.css -q \
--output-style compressed \
--source-map true \
--error-bell \
--watch
