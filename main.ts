import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Printer Apology — one-line apology note from the office printer.
// Joke shape (playbook): rule -> literal violation -> flat consequence.
// Beat 1: jammed on cheap 70gsm paper. Beat 2: ate the stapled report.
// Beat 3 (punch): printed Dave's resignation in colour. Sign-off: Tray 2.
const ENTRY =
  "Sorry I jammed on Dave's 70gsm paper, ate his stapled report, and printed his resignation in colour. Love, Tray 2.";

const MAX_CHARS = 120;
if ([...ENTRY].length > MAX_CHARS || [...ENTRY].length < 1) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${[...ENTRY].length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
