import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "I poked it once to check if it was alive \u2014 it never moved, never blinked, so I cleared it off my table.";

const out = process.env.ENTRY_OUTPUT || "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
