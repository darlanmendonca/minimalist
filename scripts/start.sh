#!/bin/bash

set -e

port=3000

./scripts/pug.sh $1 &
./scripts/sass.sh $1 &
./scripts/javascript.sh $1 & \

./node_modules/.bin/browser-sync start \
--server 'docs' \
--files 'docs/*.*' \
--no-ui \
--no-notify
