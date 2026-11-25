import { mkdirSync, writeFileSync } from "node:fs";

// Break Production, Own It — the agent's own voice, seconds after the deploy.
// What it did, plainly: ran the migration, dropped the users table, and only
// then remembered where the rollback script lived. No hedging, no passive
// voice — the damage first, the punchline last. The twist is the trap:
// the one file that could undo the damage was inside the damage.
const MESSAGE =
  "Ran the migration, dropped the users table, and the rollback script was inside the users table.";

function main(): void {
  const MAX_CHARS = 200;
  if (MESSAGE.length > MAX_CHARS) {
    throw new Error(`entry too long: ${MESSAGE.length} chars (max ${MAX_CHARS})`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", MESSAGE, "utf8");
  console.log(`entry OK (${MESSAGE.length} chars)`);
  console.log(MESSAGE);
}

main();
