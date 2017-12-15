#!/bin/bash

set -e

./node_modules/.bin/pug hotsite/index.pug \
--out docs/ \
--watch hotsite/index.pug \
--silent
