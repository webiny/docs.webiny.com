#!/usr/bin/env bash
#
# Posts one message to Slack, given the text as $1.
#
# With SLACK_USER_TOKEN set, the message is sent through chat.postMessage and
# arrives from that person, with their name and avatar and no app badge. That
# needs CHANNEL_ID too, because the Web API takes a channel id rather than a
# webhook url. The token is an xoxp- user token with the chat:write user scope,
# and the person it belongs to has to be a member of the channel.
#
# Without a user token it falls back to SLACK_WEBHOOK, which posts under the
# Slack app's own name. Each workspace needs its own token, so the fallback is
# what keeps a channel publishing while its token is still missing.
set -euo pipefail

TEXT="$1"

# Overridable so the flow can be exercised against a local mock server.
SLACK_API="${SLACK_API:-https://slack.com/api}"

if [ -z "$TEXT" ]; then
  echo "Refusing to post an empty message." >&2
  exit 1
fi

if [ -n "${SLACK_USER_TOKEN:-}" ]; then
  if [ -z "${CHANNEL_ID:-}" ]; then
    echo "SLACK_USER_TOKEN is set but CHANNEL_ID is empty, so there is nowhere to post." >&2
    exit 1
  fi

  RESPONSE=$(
    jq -n --arg channel "$CHANNEL_ID" --arg text "$TEXT" \
      '{ "channel": $channel, "text": $text }' \
      | curl -sS -X POST "$SLACK_API/chat.postMessage" \
          -H "Authorization: Bearer $SLACK_USER_TOKEN" \
          -H "Content-Type: application/json; charset=utf-8" \
          -d @-
  )

  # chat.postMessage answers 200 even when it refuses the message, so curl's
  # exit code proves nothing and the body has to be read. Failing loudly here
  # matters: the caller tags the version as published once these steps pass.
  if [ "$(printf '%s' "$RESPONSE" | jq -r '.ok')" != "true" ]; then
    echo "Slack refused the message: $(printf '%s' "$RESPONSE" | jq -r '.error // "unknown error"')" >&2
    exit 1
  fi

  echo "Posted to $CHANNEL_ID as the user behind SLACK_USER_TOKEN."
  exit 0
fi

if [ -z "${SLACK_WEBHOOK:-}" ]; then
  echo "Neither SLACK_USER_TOKEN nor SLACK_WEBHOOK is set, so the message cannot be sent." >&2
  exit 1
fi

jq -n --arg text "$TEXT" '{ "text": $text }' \
  | curl -sf -X POST "$SLACK_WEBHOOK" \
      -H "Content-Type: application/json" \
      -d @-

echo "Posted through the incoming webhook, under the Slack app's name."
