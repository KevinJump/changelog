---
name: changelog
description: "Write a changelog entry summarizing recent work into your personal changelog site, from any repo. Trigger: /changelog"
---

# /changelog

Summarize what you did (in the current repo/session, or across a day) and add
an entry to your personal changelog site.

## Usage

```
/changelog                          # summarize today's work in the current repo, write+commit an entry
/changelog <free text summary>       # use the given text as the entry content instead of inferring it
```

## Finding the changelog repo

This skill is portable — each teammate has their own clone of the changelog
repo, possibly at a different path. Resolve the path in this order:

1. If the `CHANGELOG_REPO_DIR` environment variable is set, use that.
2. Otherwise, if the current working directory itself looks like the
   changelog repo (it has `src/entries/` and a `CLAUDE.md` describing entry
   conventions), use the current working directory.
3. Otherwise, stop and ask the user for the path, and suggest they set
   `CHANGELOG_REPO_DIR` (in their shell profile) so future runs don't need to
   ask.

Call the resolved path `<changelog-repo>` below.

Read `<changelog-repo>\CLAUDE.md` first — it has the up-to-date entry
format, filename convention, and tone conventions. Follow it exactly; if it
conflicts with anything below, the repo's CLAUDE.md wins.

## Steps

1. **Read `<changelog-repo>\CLAUDE.md`** for the current conventions
   (frontmatter fields, filename pattern, tone).

2. **Gather the summary of work:**
   - If the user passed free text as an argument, use that directly as the
     basis for the entry (still tighten it to match the repo's tone).
   - Otherwise, infer it from the current session: look at the conversation so
     far in this working directory for what was built/fixed/changed. Also run
     `git log --since=midnight --oneline` (and `git status`/`git diff` if
     helpful) in the current working directory if it's a git repo, to catch
     anything not discussed explicitly.
   - Identify the current project name (git remote name, or the current
     directory's folder name) to prefix bullet points when it's not obvious
     from context, per the changelog repo's conventions.
   - Keep it factual and terse — a handful of bullet points, not prose.

   Check whether the current repo is public, and if so, get its URL — e.g.
   `gh repo view --json isPrivate,url` if `gh` is available, otherwise infer
   from `git remote get-url origin`. If it's public, plan to add a repo link
   line per the changelog repo's conventions. Skip this for private/internal
   repos, and don't let it block the entry if visibility can't be determined
   (just omit the link).

   Also check each bullet for a **publicly available resource** it mentions —
   a NuGet/npm package that was published or released, a marketplace listing,
   a docs page, a tagged GitHub release, etc. — and look up its real URL
   (e.g. `nuget.org`/`npmjs.com` package page, the release URL) to link it
   inline in that bullet, per the changelog repo's conventions. Only link
   things that are actually public; skip internal feeds or anything you can't
   verify is publicly reachable.

3. **Check for an existing entry for the same project today:** list
   `<changelog-repo>\src\entries\YYYY\MM\YYYY-MM-DD-*.md` for
   today's date (entries live in year/month subfolders) and check whether any
   already cover the same project (matching repo/folder name, title, or
   `**Repo:**` link identified in step 2). If one exists, plan to append to
   it instead of creating a new file (see step 5).

4. **Show the drafted entry to the user before writing it** — the repo link
   (if any), the bullet points, and the target filename (new file, or
   "appending to <existing file>" if step 3 found a match). Let them
   edit/approve. Don't skip this: it's their personal log, and inferred
   summaries can miss or misstate things.

5. **Write the file:**
   - **If step 3 found an existing same-day entry for the same project:**
     append the new bullet points to the end of that file's body (after any
     existing bullets), keeping the file's original frontmatter (title,
     date) as-is — don't create a second file for the same project/day.
     Only widen the `title` if the new work meaningfully doesn't fit the
     existing one (e.g. combine "repo standards" + "v3 migration" into one
     title covering both) — otherwise leave it. Bullets should stay in
     chronological order, so newly-run work being appended (which happened
     later in the day) goes at the end.
   - **Otherwise:** target
     `<changelog-repo>\src\entries\YYYY\MM\YYYY-MM-DD-slug.md`
     (year/month subfolders, e.g. `src\entries\2026\08\2026-08-18-slug.md`)
     — one file per entry/project per day. Set `date` in the frontmatter to today's date
     **with the current time** (`YYYY-MM-DDTHH:MM:00`), so same-day entries
     sort in the order they happened. The site only displays the date, not
     the time.
   - **Quote the `title` value if it contains a colon** (e.g. `"Project:
     did the thing"`) — an unquoted colon inside a YAML scalar breaks
     frontmatter parsing and fails the site build. When in doubt, just always
     quote `title`.

6. **Commit locally** in the changelog repo (`git add` + `git commit`) with a
   short commit message describing the entry. **Do not push** — ask the user
   if they want to push now, since that publishes to the live site.

7. Report the file path and a short summary of what was written.
