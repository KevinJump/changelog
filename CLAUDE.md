# changelog repo conventions

This repo is Kevin's personal dev changelog — a static site (Eleventy) that lists
short, informal-but-technical entries in chronological order. No comments, no
inline editing, minimal frontmatter. See [README.md](README.md) for the site/deploy
mechanics.

## Writing an entry

- File: `src/entries/YYYY-MM-DD-slug.md`. Multiple entries on the same date
  are normal (e.g. separate entries for each project touched that day) — each
  distinct project gets its own file with its own slug. But if there's
  already an entry for the *same project* on the *same day*, append the new
  bullet points to that existing file instead of creating a second one for
  the same project/day.
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
- If the entry relates to a **public** repo, add a link to it as the first
  line of the body, before the bullets:
  ```
  **Repo:** [owner/name](https://github.com/owner/name)
  ```
  Skip this line for private/internal repos.
- When a bullet mentions a **publicly available resource** — a NuGet/npm
  package, a marketplace listing, a tagged release, a docs page, etc. — link
  the specific mention inline to that resource, e.g.:
  ```
  - Released [`v17.0.0-beta1`](https://www.nuget.org/packages/Jumoo.uSync.Automate.Actions.Complete) to NuGet
  ```
  This is separate from the `Repo:` link above (which points at the source
  repo) — a bullet can have both. Only link resources that are actually
  public; don't link internal package feeds, private NuGet sources, etc.
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
