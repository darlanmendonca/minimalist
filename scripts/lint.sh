#!/bin/bash

set -e

./node_modules/.bin/eslint *.js components/**/*.js --quiet
