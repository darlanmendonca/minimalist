#!/bin/bash

set -e

case $1 in
  chrome) browser="Chrome" ;;
  safari) browser="Safari" ;;
  firefox) browser="Firefox" ;;
  nightmare) browser="Nightmare" ;;
  *) browser="all" ;;
esac

if [[ $1 == browserstack:* ]]; then
  browser="$1"
fi

if [ $BROWSER_STACK_ENV ]; then
  browser="browserstack:chrome,browserstack:safari,browserstack:firefox"
fi

require-self &&
karma start karma.config.js --browsers $browser $@
