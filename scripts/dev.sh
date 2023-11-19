#!/usr/bin/env bash
ARGS=$@
NODE_ENV=development yarn generate $ARGS && concurrently "NODE_ENV=development yarn generate $ARGS --watchOnly" "next dev"
