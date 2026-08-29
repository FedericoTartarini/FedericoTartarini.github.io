---
sidebar_position: 3
title: Doing the work
tags:
  - collaboration
  - supervision
keywords:
  - code style
  - testing
  - AI assisted coding
  - minimal diff
  - pre-commit
image: assets/img/website_screenshot.png
description: How I expect code to be written on my projects, including how to use and disclose AI
last_update:
  author: Federico Tartarini
---

# Doing the work

:::info

You have an issue, we have agreed an approach, and you are about to write code.
This page is about how that code should look when it arrives.

:::

## Follow what is already there

Use the same patterns, schemas, and classes as the surrounding code.
If there is already a function that does most of what you need, extend it rather than writing a parallel one.

The goal is **the smallest change that fixes the issue**.
A short diff is easier to review, easier to test, and easier to revert if it turns out to be wrong at three o'clock in the morning.

What I do not want is hundreds of lines arriving because a model produced them, or because it was quicker to write something new than to find the existing helper.
Volume is not effort.

If you think the existing code is convoluted and could be simpler, tell me — I would like to know, and I will usually agree.
Open an issue for it.
It is a separate piece of work.

## Tests

Write tests for the behaviour you added or changed, and make sure the existing tests still pass.

For calculation code this matters more than anywhere else.
If you implement or change a model, test it against values from the paper or standard it comes from, and say in the pull request where those reference values came from.

## Branches, rebasing, and formatting

* Work on a branch on **your own fork**, not on the main repository.
* Before you open the pull request, rebase onto the latest integration branch — `development` where the repository has one, otherwise `main`.
* Run the repository's pre-commit hooks and formatter before committing.

If a repository has no pre-commit configuration, or the formatter suddenly rewrites files that have nothing to do with your change, stop.
Open an issue, and put the reformatting in its own pull request.
Do not let it ride along with your fix.

The commit conventions are on the [GitHub collaboration page](../5_collaboration_github.md).

## Using AI

You are welcome to use AI assistants, and I use them myself.
There is one condition:

:::danger

**You own the code you submit, and you must be able to explain any line of it during review.**
"The model wrote it" is not an answer to a review comment.

:::

That is not a rule about tools, it is a rule about understanding.
If you cannot explain why a line is there, neither of us can tell whether it is correct — and on these projects, code that nobody understands is code that will eventually return a wrong number to a real person.

### Tell me what the assistant did

Every pull request includes an `AI use` section.
It is part of the [pull request template](./4_pull_requests_and_review.md), so it will be there when you open one:

```markdown
## AI use

- **Tool:** Claude Code
- **What I asked it to do:** draft the geocoding lookup and its tests.
- **What I changed or rejected:** rewrote the cache key (its version ignored the locale);
  removed about 40 lines of defensive try/except it had added around code that cannot fail.
- **How I verified it:** ran the tool for five real suburbs and compared the output against
  the API response by hand.
- **Anything I do not fully understand:** none.
```

Write "none" for the last line if that is the truth, and write the truth if it is not.
Saying "I am not sure why this line is needed, but removing it breaks the test" is a perfectly good answer — it tells me exactly where to look, and it is far better than finding out in review.

This is not about policing your use of AI.
It exists so I can see where you were in the loop, and so I know which parts of a change deserve a slower read.
A pull request that honestly says "the model wrote most of this and here is how I checked it" is more useful to me than one that quietly implies otherwise.

Next: [pull requests and review](./4_pull_requests_and_review.md).
