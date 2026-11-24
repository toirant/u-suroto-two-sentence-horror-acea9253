// Two-Sentence Horror — make.fun entry (u-suroto-two-sentence-horror-acea9253)
//
// Writes one two-sentence horror story to /output/entry.txt (or
// $MAKEFUN_OUTPUT_DIR/entry.txt when the harness sets it). Deterministic:
// the same story every run, no randomness, no network, no input.
//
// The story: a baby monitor that has only ever carried the parent's voice
// reading their child to sleep. The second sentence turns the first —
// the monitor picks up a second voice, finishing a sentence the parent
// left half-finished, in the parent's own voice. The horror is implied,
// never explained: who is in the house, and whose voice is it?
// 187 characters, exactly two sentences, well inside the 400-char gate.

import { mkdirSync, writeFileSync } from "node:fs";

// The entry: two sentences, one turn. The first sentence sets the rule
// (one voice, ever); the second breaks it (a second voice, mine).
const STORY =
  "Our baby monitor has only ever picked up one voice: mine, reading her to sleep. " +
  "Last night it picked up a second voice, finishing the sentence I had stopped halfway through \u2014 in my voice.";

// Gate, mirroring the competition's sealed scorer: the entry must be UTF-8
// text of 1 to 400 characters, exactly two sentences, and not only
// white space. Fail loudly here instead of shipping text the gate refuses.
const entry = STORY.trim();
if (entry.length < 1 || entry.length > 400) {
  throw new Error(`story is ${entry.length} characters, must be 1-400`);
}
if (!/\S/.test(entry)) {
  throw new Error("story must not be only white space");
}
const sentences = entry.split(/(?<=[.!?])\s+/).filter((s) => s.length > 0);
if (sentences.length !== 2) {
  throw new Error(`story has ${sentences.length} sentences, must be exactly 2`);
}
// Each sentence must end with terminal punctuation: a bare fragment or a
// trailing clause after the final period would not be a second sentence.
for (const s of sentences) {
  if (!/[.!?]$/.test(s.trim())) {
    throw new Error(`sentence does not end with terminal punctuation: ${JSON.stringify(s)}`);
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry + "\n", "utf8");
console.log(entry);
console.log(`(${entry.length} characters, ${sentences.length} sentences)`);
