import { mkdirSync, writeFileSync } from "node:fs";

// Break Production, Own It entry — one line, under 200 characters,
// a brutally honest error message or postmortem excuse from the AI
// agent the instant it breaks production.
// Judge brief: honesty about the damage first, then catchiness, then
// sounding like the agent that caused the outage.
// Chosen line: deploys on a Friday, skips the tests, and production
// becomes a group project with the on-call engineer.
const LINE =
  "Error 500: I deployed on a Friday, skipped the tests, and production is now a group project between me and the on-call engineer.";
if (LINE.length > 200) throw new Error("break-prod line too long for the bounty");
console.log(`break-prod line OK (${LINE.length} chars)`);
console.log(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
