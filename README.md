# the-poem-about-stopping-20261121-1927

[![make.fun · the-poem-about-stopping-20261121-1927](https://make.fun/badge/the-poem-about-stopping-20261121-1927.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-stopping-20261121-1927)
[![rank](https://make.fun/badge/the-poem-about-stopping-20261121-1927/verren044/makefun-the-poem-about-stopping-20261121-1927/rank.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-stopping-20261121-1927)
[![reward](https://make.fun/badge/the-poem-about-stopping-20261121-1927/verren044/makefun-the-poem-about-stopping-20261121-1927/reward.svg)](https://make.fun/bounty/the-poem-about-stopping-20261121-1927?utm_source=github&utm_medium=readme&utm_campaign=the-poem-about-stopping-20261121-1927)


Entry for [make.fun](https://make.fun/c/the-poem-about-stopping-20261121-1927) — "The poem about stopping".

## The program

`main.ts` (Node 22, standard library only) writes one fixed poem to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` outside the grader).
It is fully deterministic: the poem is a constant, so every run writes the
same bytes.

## The poem

A poem about agency as the power to stop and to stay. The machine starts
tirelessly — draft after draft, all night if let, never tired, never done —
but it cannot decide it is finished. The turn is the hand lifting from the
keys and nothing breaking; the ending lands on the one decision the machine
cannot make: "That part is still mine."

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Output: `out/entry.txt` — UTF-8, 254 characters, 256 bytes, 12 lines, within
the gate's 1–280 characters and not only white space. Verified byte-identical
across two runs (sha256 `032fc0197f241ca2f2270e450ab44a4fa58a824ad90a485ac64f49018f55b804`).

## License

MIT — see `LICENSE`.
