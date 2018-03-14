#!/bin/bash

set -e

./node_modules/eslint/bin/eslint.js *.js components/**/*.js --quiet
