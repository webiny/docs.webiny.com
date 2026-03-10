#!/usr/bin/env bash
ARGS=$@
NODE_ENV=development yarn generate $ARGS && concurrently --prefix=none "NODE_ENV=development yarn generate $ARGS --watchOnly" "next dev & sleep 2 && open http://localhost:3000/docs/get-started/install-webiny"
