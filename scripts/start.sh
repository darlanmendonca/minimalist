#!/bin/bash

set -e

port=3000

npm run pug $1 &
npm run sass $1 &
npm run javascript $1 & \

./node_modules/.bin/browser-sync start \
--server 'docs' \
--files 'docs/*.*' \
--no-ui \
--no-notify
