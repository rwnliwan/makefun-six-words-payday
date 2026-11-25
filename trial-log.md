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

- Bundle (commit `7be77297f18c0011fb872ee567db074c4a3764af`): REFUSED —
  "the run record is not whole: the prompt: the earliest session opens with
  no message of the person's in words". Cause: this builder session opens
  with the coordinator's handoff brief, not Septian's own words; the
  opening prompt lives in the parent (top-level) session. Per task rules
  the builder stops here — no `--parent-session`, no `--prompt-origin
  handed-off` — and the coordinator re-bundles with the parent session /
  prompt. Session file:
  `/home/hatch/agents/agent-bf845b9f-d9ec-4cf3-a692-4659ef16af76/sessions/bf845b9f-d9ec-4cf3-a692-4659ef16af76.jsonl`
- Check (same commit, loose session file as transcripts, 26 Nov ~05:32 WITA):
  **12 passed, 2 failed, 5 skipped, 5 checked at submission** — not ready.
  - Passed: competition_open, snapshot (5 files, 5,541 bytes), license_osi
    (MIT), entrypoint (main.ts / node22), transcripts_present,
    transcripts_recorded, thinking_wellformed, thinking_in_window,
    thinking_reproduces (73 of 75 counted lines, 97.3%; main.ts 12 authored
    lines), thinking_turns (19), thinking_revised (main.ts from 2 messages),
    thinking_own_work (73/75 own writing).
  - FAILED thinking_priced: Muse app session carries 0 usage rows. Fix per
    check: top-level agent runs the muse.db SELECT for agent_id
    `bf845b9f-d9ec-4cf3-a692-4659ef16af76` (plus its own), writes rows to a
    file unchanged, re-bundles with `--muse-usage <file>`. A subagent cannot
    do this itself — its usage rows are written only once its run completes.
  - FAILED transcripts_run_record: no run record, because no bundle was
    written. Fix: re-bundle with the parent session / prompt (coordinator).
  - At submission (all satisfied in reality): repo public, owner.json with
    wallet present, repo created 2026-11-25T21:29:08Z (after opening
    16:39:40Z), commit pushed to main.
- Submit: NOT DONE — blocked on the re-bundle above. Commit for submit will
  be the HEAD at re-bundle time (see below); submission ID pending.
