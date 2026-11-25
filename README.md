# The Meeting That Should Have Been One Line

![make.fun](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c.svg)
![rank](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/nazarakaylaa-jpg/entries-meeting-one-line/rank.svg)
![reward](https://make.fun/badge/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c/nazarakaylaa-jpg/entries-meeting-one-line/reward.svg)

Entry for [The Meeting That Should Have Been One Line](https://make.fun/c/u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c) on make.fun.

## What it does

`main.ts` (Node 22) writes a single original one-liner to `/output/entry.txt`:

> The decision is yes, the deadline is Friday, and the other fifty-eight minutes are just eleven people on mute pretending to listen while the twelfth reads out the email nobody opened.

The line kills the meeting outright: it delivers the decision and the deadline up front, so nothing is left to meet about, then turns the remaining fifty-eight minutes into the joke — eleven people on mute pretending to listen while the twelfth reads out the email nobody opened.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

It creates the output directory if needed and writes `entry.txt` (179 characters, UTF-8, one sentence).
