# FedericoTartarini.github.io

## Shared facts file (manual sync, no automation)

Federico's CV and about-me documents (separate local repos, under
`career/cv` and `career/about-me` in his OneDrive) share a single source of
truth for hard facts — `career/about-me/facts.json` — covering roles/
employment dates, grants, HDR/capstone students, talks, tools maintained,
awards, papers, and citation stats.

This website is **not** wired to read that file automatically (deliberately —
no git submodule between the repos). But its `docs/tools/*.md`,
`docs/my-research/*.md`, and `docs/about_me/*.md` pages overlap with several
of those same facts (which tools are described, which papers have a research
post, role/grant/award details mirrored in `docs/about_me/`).

**Whenever a shared fact changes** (a new tool, a role ending, a new paper,
an award) — check whether it should also change here, by comparing against
`career/about-me/facts.json`'s `in_website` flags (on `papers[]` and
`tools[]`) and the `roles`/`grants`/`awards` sections. Update this site's
docs by hand; there's no generation step.

Periodically, ask Claude to diff this site's `docs/` against
`career/about-me/facts.json` for drift or missing entries (e.g. a tool with a
`docs/tools/*.md` page but no matching `facts.json` entry, or vice versa).
