#!/usr/bin/env bash
#
# Posts one message to Slack as a person, given the text as $1 and optionally a
# Block Kit blocks array as $2. With blocks, $1 is what shows in notifications
# and in clients that cannot render them.
#
# SLACK_USER_TOKEN is an xoxp- user token with the chat:write user scope, and
# CHANNEL_ID is the channel to post into, because the Web API takes an id rather
# than a webhook url. The person the token belongs to has to be a member of that
# channel. Each workspace needs its own token.
set -euo pipefail

TEXT="${1:-}"
BLOCKS="${2:-}"

# Overridable so the flow can be exercised against a local mock server.
SLACK_API="${SLACK_API:-https://slack.com/api}"

if [ -z "$TEXT" ]; then
  echo "Refusing to post an empty message." >&2
  exit 1
fi

if [ -z "${SLACK_USER_TOKEN:-}" ]; then
  echo "SLACK_USER_TOKEN is empty, so there is no way to post." >&2
  exit 1
fi

if [ -z "${CHANNEL_ID:-}" ]; then
  echo "CHANNEL_ID is empty, so there is nowhere to post." >&2
  exit 1
fi

if [ -n "$BLOCKS" ]; then
  PAYLOAD=$(jq -n --arg channel "$CHANNEL_ID" --arg text "$TEXT" --argjson blocks "$BLOCKS" \
    '{ "channel": $channel, "text": $text, "blocks": $blocks }')
else
  PAYLOAD=$(jq -n --arg channel "$CHANNEL_ID" --arg text "$TEXT" \
    '{ "channel": $channel, "text": $text }')
fi

RESPONSE=$(
  printf '%s' "$PAYLOAD" \
    | curl -sS -X POST "$SLACK_API/chat.postMessage" \
        -H "Authorization: Bearer $SLACK_USER_TOKEN" \
        -H "Content-Type: application/json; charset=utf-8" \
        -d @-
)

# chat.postMessage answers 200 even when it refuses the message, so curl's exit
# code proves nothing and the body has to be read. Failing loudly matters most
# in the publish workflow, which tags the version as published once its posting
# steps pass, and that tag makes every later run skip.
if [ "$(printf '%s' "$RESPONSE" | jq -r '.ok')" != "true" ]; then
  echo "Slack refused the message: $(printf '%s' "$RESPONSE" | jq -r '.error // "unknown error"')" >&2
  exit 1
fi

echo "Posted to $CHANNEL_ID."
