import { mkdirSync, writeFileSync } from "node:fs";

// Famous last words of a phone at 1% battery.
// Chosen from five candidates for the sharpest twist: the phone confesses
// it was never out of storage — it just didn't want the owner's photos.
const LAST_WORDS =
  "I have one percent left, and I'm spending it on a confession: I was never out of storage. I just didn't want your photos.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LAST_WORDS + "\n", "utf8");
