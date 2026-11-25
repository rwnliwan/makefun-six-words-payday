import { mkdirSync, writeFileSync } from "node:fs";

// Six Words to a Payday — entry: "First paycheck bounced. So did I."
// Exactly 6 words, 33 characters, at most 60 per the gate.
const ENTRY = "First paycheck bounced. So did I.";

// Enforce the gate in the program itself: exactly six words, 1-60 chars.
const words = ENTRY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`entry must be exactly 6 words, got ${words.length}`);
}
if (ENTRY.length < 1 || ENTRY.length > 60) {
  throw new Error(`entry must be 1-60 characters, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
