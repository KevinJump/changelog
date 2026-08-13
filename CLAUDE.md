# changelog repo conventions

This repo is Kevin's personal dev changelog — a static site (Eleventy) that lists
short, informal-but-technical entries in chronological order. No comments, no
inline editing, minimal frontmatter. See [README.md](README.md) for the site/deploy
mechanics.

## Writing an entry

- File: `src/entries/YYYY-MM-DD-slug.md` — **one file per entry**, not per day.
  Multiple entries on the same date are normal (e.g. separate entries for each
  project touched that day) — give each its own file with a distinct slug,
  don't append to an existing file.
- Frontmatter is minimal — `title` and `date`. Include a time on `date` (even
  though the site only displays the date) so same-day entries sort in the
  order they happened:
  ```
  ---
  title: Short title for the entry
  date: YYYY-MM-DDTHH:MM:00
  ---
  ```
- Body style: short bullet points, one per notable thing done. Name the
  project/repo it relates to when it's not obvious, e.g.:
  ```
  - uSync.Complete: fixed a bug where content sync dropped custom properties
  - package x: added retry logic to the upload client
  ```
- Tone: informal, technical, terse. This is a changelog, not a report — skip
  scene-setting, skip "today I worked on...", just state what changed. No
  padding sentences.
- Don't editorialize about how hard something was or how it felt — just the
  factual change.

## Writing entries via Claude Code

Kevin uses a personal `/changelog` slash command (a user-level skill at
`~/.claude/skills/changelog/SKILL.md`, works from any repo) to generate and
commit entries into this repo at the end of a work session. That skill reads
these conventions from this file — if the conventions above change, the skill
picks it up automatically next run since it re-reads this file each time.

The skill commits locally but does not push automatically — pushing is
confirmed with Kevin first.
