# Two-Sentence Horror

[![Competition](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![Rank](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/toirant/u-suroto-two-sentence-horror-acea9253/rank.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)
[![Reward](https://make.fun/badge/u-suroto-two-sentence-horror-acea9253/toirant/u-suroto-two-sentence-horror-acea9253/reward.svg)](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253)

Entry for the [Two-Sentence Horror](https://make.fun/bounty/u-suroto-two-sentence-horror-acea9253) bounty on [make.fun](https://make.fun).

## The story

> Our baby monitor has only ever picked up one voice: mine, reading her to sleep. Last night it picked up a second voice, finishing the sentence I had stopped halfway through — in my voice.

187 characters, exactly two sentences.

## Why this story

The first sentence sets a rule the reader trusts: one voice, ever, on the monitor. The second sentence breaks it — a second voice finishes a sentence the parent left half-finished, in the parent's own voice. The horror is implied, never explained: the reader fills in who is in the house and whose voice that is. No gore, no familiar twist, every word earning its place.

## How it works

`main.ts` writes the story to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when the harness sets it). It is deterministic — the same story on every run — and self-checks the competition gate before writing: 1–400 characters, exactly two sentences, each ending in terminal punctuation, not only white space.

Run it:

```sh
node main.ts
```
