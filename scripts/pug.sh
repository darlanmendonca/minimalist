#!/bin/bash

set -e

pug hotsite/index.pug components/**/*.pug \
--out docs/ \
--silent \
--watch hotsite/index.pug
