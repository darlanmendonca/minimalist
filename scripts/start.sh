#!/bin/bash

set -e

port=3000

./scripts/pug.sh &
./scripts/sass.sh &
./scripts/javascript.sh &

./node_modules/.bin/browser-sync start \
--server 'docs' \
--files 'docs/*.*' \
--no-ui \
--no-notify
