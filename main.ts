// Make the AI Judge Laugh: the Office Joke Open
// Competition: u-aldy998-make-the-ai-judge-laugh-the-office-joke-open-9920f232
// Writes one office joke to <MAKEFUN_OUTPUT_DIR>/entry.txt (cap 200 chars).
// Node 22 stdlib-only.
//
// Draft v1: "Our team-building trust fall had Legal on Zoom and HR filming it
// for training, yet the only thing that fell all afternoon was the Q3 forecast
// in the shared spreadsheet." The turn works; it needs one more specific
// office detail (catering on standby) to make the scene real.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Revision: add catering on standby so three departments are present and
// braced, and tighten the fall so the punch lands entirely on the forecast.
// Final line (196/200): specific office detail, one clean turn at the end.
const SETUP = "Our team-building trust fall had Legal attending by Zoom, HR recording it for training and catering on standby,";
const PUNCHLINE = "yet the only thing that actually fell was the Q3 forecast in the shared spreadsheet.";

const LINE = `${SETUP} ${PUNCHLINE}`;

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error(`Invalid entry line: must be one non-blank line of 1-200 chars, got ${LINE.length} chars.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
