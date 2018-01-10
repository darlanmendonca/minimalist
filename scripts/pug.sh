#!/bin/bash

set -e

./node_modules/.bin/pug hotsite/index.pug components/**/*.pug \
--out docs/ \
--silent \
--watch hotsite/index.pug
