---
sidebar_position: 2
title: Picking and scoping an issue
tags:
  - collaboration
  - supervision
keywords:
  - GitHub issues
  - scoping
  - open source contribution
  - code review
  - vertical slicing
  - design review
image: assets/img/website_screenshot.png
description: How to choose what to work on, agree an approach, and keep the change small
last_update:
  author: Federico Tartarini
---

# Picking and scoping an issue

:::info

This page covers everything that happens between "I am set up" and "I am writing code".
Do not skip it — most of the problems I see in pull requests were created at this stage, not while coding.

:::

## Start from the open issues

Look at the open issues on the repository first.
Someone has already decided these are worth doing, which saves you guessing.

If an issue is not clear — you cannot tell what the expected behaviour is, or which files it touches, or why it matters — **ask in the issue thread before writing code**.
An unclear issue is itself a problem worth fixing, and your question improves it for whoever picks it up next.

## Propose an approach before you build it

Once you understand the problem, write a short comment on the issue setting out how you would solve it.
Where there is more than one reasonable option, describe one or two alternatives and their trade-offs, and say which you would choose.

**Have this discussion on GitHub, not in chat or email.**
Even if you never end up fixing that issue, the reasoning stays attached to it: the next person inherits your thinking instead of starting from zero, and in a year's time we can both see why we chose what we chose.
A discussion in a chat app is gone the moment the thread scrolls.

Keep it short.
Two paragraphs and a bulleted list of options is plenty.

:::note

If you use an AI assistant to help write an issue or a comment, edit what it gives you before posting.
Models tend to produce text that is long, hedged, and hard to read.
Cut everything that is not doing work.
A comment I have to read three times is worse than one you wrote yourself in plainer language.

:::

## Interrogate your design before you code

Before you write that comment, argue with yourself first.

For anything non-trivial, sit with the problem and ask the questions a reviewer would ask before you post: what exactly counts as done, what happens on the edge cases — empty input, no results, a second click before the first request returns — and whether you are reusing a term the codebase already uses for something else.

**Some issues will already carry my own answers to the hardest of these questions**, posted as a comment before the issue is opened up for contributions.
When that is there, treat it as settled: your job is to interrogate what is *not* yet decided — the implementation-level choices the brief deliberately left to you — not to re-litigate the parts I have already worked through.

When nothing has been decided yet, do that interrogation yourself, out loud, in the issue.
A short back-and-forth with yourself in the comment ("could also do X, but that breaks Y, so Z") is more useful to me than a comment that jumps straight to a confident answer — I can see the reasoning, not just the conclusion, and can correct it early rather than after the pull request lands.

:::note

If you want a more structured way to do this, look at how the `grilling` skill in [mattpocock/skills](https://github.com/mattpocock/skills/blob/main/skills/productivity/grilling/SKILL.md) formalises it: work through open questions in rounds, one round settled before the next begins, until nothing is left silently assumed.
The community [superpowers](https://github.com/obra/superpowers-marketplace) plugin does the same thing with a gentler, more collaborative tone in its `brainstorming` skill.
Neither requires the tool itself — the discipline is the point, read the source and borrow the practice.

:::

## Build a vertical slice, not a finished layer

When you do start coding, resist finishing one layer before starting the next.
Building the whole database schema, then the whole API, then the whole interface, means nothing actually works until the very end — and the first time anyone sees whether the pieces fit together is in code review.

Instead, cut a **vertical slice**: the narrowest path through every layer the feature touches, so a small, complete, demoable piece of behaviour exists after the first few hours of work, not after all of it.

* Pick the smallest version of the feature that is honestly useful, and build schema through interface for that version alone.
* Get it working end to end before you add the next case or the next option.
* Each slice should be independently demoable — if you cannot show it doing something, it is not a slice yet, it is a stub.

This is also why proposing an approach up front matters: a plan that is already sliced into small, ordered pieces is one I can review as it grows, instead of all at once at the end.

## Keep the change small

Small pull requests get reviewed quickly and merged quickly.
Large ones sit there, because reviewing them properly takes an afternoon I usually do not have.

The rules I work by:

* **One issue, one pull request.** The pull request should contain only what is needed to close that issue.
* **If the issue is too big, break it up.** Open several smaller issues and ship them one at a time. Tell me if you think an issue should be split — that is a useful contribution in itself.
* **Found a different problem while working? Open a new issue.** Do not fix it in this pull request. I would rather have a list of known problems than a change I cannot review.
* **Formatting and linting go in their own pull request.** If you reformat files, that change must be separate from the fix, so the fix stays readable in the diff.

:::danger

Never bundle unrelated changes into one pull request.
A diff that mixes a bug fix with a refactor and a reformat cannot be reviewed properly, and cannot be reverted cleanly if something goes wrong in production.

:::

### The one exception

If the issue is *categorical* — for example, "rename variables that do not follow PEP 8" — then fixing every instance of that same class of problem is in scope, even the ones the issue did not list explicitly.
That is the issue.
The test is whether the extra changes are the same kind of change, not just changes you happened to notice at the same time.

## Do not redesign the interface on the way past

This one comes up often enough to deserve its own section.

A student was once asked to add saved locations to the Sports Heat Tool, so that a location you had searched for before could be recalled quickly.
The feature was implemented — along with a substantial redesign of the interface.

For an app that thousands of people already know how to use, that is a much bigger and riskier change than the one that was asked for, and it makes the actual feature almost impossible to review in isolation.

So: **keep visual change to the minimum the feature requires.**
If you think the interface should be rethought, say so — open an issue and let us discuss it as its own piece of work.
I am genuinely open to it.
What I am not open to is a redesign arriving as a side effect of something else.

The same applies to new features generally.
Ideas are welcome; open an issue for them.
Just do not attach them to an unrelated pull request.

Next: [doing the work](./3_doing_the_work.md).
