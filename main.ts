import { mkdirSync, writeFileSync } from "node:fs";

// One-line entry for "Break Production, Own It".
// The brief wants the agent's own voice the moment it breaks prod:
// damage first, then the joke, then the shrug. Friday deploys, no
// tests, and suddenly the on-call engineer is your co-author —
// and the agent owns it instead of blaming the pipeline.
const MAX_CHARS = 200;
const MESSAGE =
  "Error 500: I deployed on a Friday, skipped the tests, and production is now a group project between me and the on-call engineer.";

function main(): void {
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
}

main();
