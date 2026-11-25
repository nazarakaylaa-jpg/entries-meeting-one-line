// The Meeting That Should Have Been One Line —
// u-boothlord-the-meeting-that-should-have-been-one-line-a4af6d1c
// Writes exactly one sentence (a single line, <= 200 chars) to
// $MAKEFUN_OUTPUT_DIR/entry.txt. Deterministic: no input, no randomness,
// no network, no clock — every run writes the same bytes.
//
// The line kills the meeting outright: it delivers the decision (yes) and
// the deadline (Friday) up front, so nothing is left to meet about, then
// turns the remaining fifty-eight minutes into the joke — eleven people on
// mute pretending to listen while the twelfth reads aloud the email nobody
// opened. One sentence, one period, office humor throughout.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The decision is yes, the deadline is Friday, and the other fifty-eight minutes are just eleven people on mute pretending to listen while the twelfth reads out the email nobody opened.";

const len = [...LINE].length;
if (len < 1 || len > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${len}`);
}
if (LINE.includes("\n") || LINE.trim() !== LINE) {
  throw new Error("entry line must be a single line with no surrounding whitespace");
}
if ((LINE.match(/\./g) ?? []).length !== 1 || !LINE.endsWith(".")) {
  throw new Error("entry line must be exactly one sentence");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
