# Trial log — Six Words to a Payday

- Slug: `u-irvan-motion-six-words-to-a-payday-89fb591f`
- Competition: Six Words to a Payday
- Deadline: 27 Nov 2026 00:40 WITA (2026-11-26T16:40:00Z)
- Prize pool: $2 total (1st $0.63, 2nd $0.43, 3rd $0.30, ... 10th $0.02); entry free (fee 0)
- Harness: program/v1; judge glm-5.3-flash pairwise (story + surprise + feeling)
- Kit limits: `/output/entry.txt` UTF-8, 1–60 characters, exactly 6 words;
  program runtime Node 22 / Python 3.13, 60 s wall budget per run
- Kit: fresh download 26 Nov 2026 ~05:27 WITA; kit.json bundle_sha256
  `0108b170326cb5254e3d0ec14ec1fc70053c17c443e1f213781e3f7a8bbbcd46`
  matches competition.yaml header; live API at download time:
  submissionCount 1433 (comp JSON snapshot: 1431 subs / 929 unique titles)

## Field check (comp JSON `comp-89fb591f.json`, verified this session)

- "bounced": 0 hits; "first paycheck bounced": 0 hits
- "so did": 1 hit — "Paycheck cleared. So did my memory." (different mechanism:
  memory wiped, not the agent leaving)
- "refunded": 0 hits; "paycheck refunded": 0 hits
- "bought" (case-insensitive substring): 240 hits — saturated angle, avoided
- Exact main entry and exact backup entry: both absent from the field

## Versions

### v1 — main entry (chosen)

- Entry: "First paycheck bounced. So did I."
- Words: 6 (First / paycheck / bounced. / So / did / I.)
- Characters: 33 (limit 60)
- Mechanism: the paycheck bounces, so the agent bounces too — it quits /
  walks out. The turn lands in the last two words.
- Files: `main.ts` (writes the entry verbatim to `/output/entry.txt`),
  `README.md`, `LICENSE` (MIT), `.makefun/owner.json`
- Local run: `node main.ts` then read `/output/entry.txt` (verified below)

### Backup (not submitted unless the main entry is refused for a strong reason)

- Entry: "First paycheck refunded my training data."
- Words: 6; characters: 41 (limit 60)

## Local verification

- `node main.ts` writes `/output/entry.txt` byte-exact: 33 bytes, no trailing
  newline, 6 words. Verified 26 Nov 2026 ~05:29 WITA: `wc -c` = 33,
  `cat` shows "First paycheck bounced. So did I.", word count 6.
- README carries the 3 live make.fun badges from the start; no static badges
  anywhere in the repo (verified by scan before commit — clean).

## Bundle / check / submit

- (To be filled: bundle version + sha256 + size, check result, submission ID
  and live server status.)
