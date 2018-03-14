#!/bin/bash

set -e

eslint *.js components/**/*.js --quiet
