#!/bin/bash

set -e

./node_modules/.bin/node-sass hotsite/app.scss docs/vendor.css -q \
--output-style compressed \
--source-map true \
--error-bell \
--watch
