---
sidebar_position: 4
title: Pull requests and review
tags:
  - collaboration
  - supervision
keywords:
  - pull request
  - code review
  - peer review
  - CodeRabbit
  - review etiquette
image: assets/img/website_screenshot.png
description: What a good pull request looks like on my projects, and the order in which it gets reviewed
last_update:
  author: Federico Tartarini
---

# Pull requests and review

:::info

The Git mechanics — forking, branching, committing, pushing, opening the pull request — are on the [GitHub collaboration page](../5_collaboration_github.md).
This page is about what goes *in* the pull request, and who looks at it in what order.

:::

## Write the description for the person reviewing it

The description is the first thing I read and often the only lasting record of why a change was made.
Most repositories ship a `.github/pull_request_template.md`, so opening a pull request will pre-fill the structure.
Fill it in properly:

* **What changed and why** — a few sentences of plain language, not a restatement of the diff.
* **The linked issue** — `Fixes #123`, so the issue closes automatically and the discussion stays connected.
* **How you tested it** — including, for calculation code, the reference values you checked against and where they came from.
* **The [AI use section](./3_doing_the_work.md#tell-me-what-the-assistant-did).**

### Screenshots, for anything with an interface

If you changed a user interface, include **before and after screenshots on both mobile and desktop**.

Our apps are used on both, and mobile is the majority.
A change that looks fine on a laptop and overflows on a phone is a broken change, and screenshots are the cheapest way for both of us to catch that before users do.

## The review order

Open the pull request as a **draft** and leave it as a draft until it has been through the first three steps below.

1. **Peer review.** At least one — preferably two — of the other contributors on the project review it critically. They are looking for bugs, unnecessary complexity, and anything that could break existing behaviour.
2. **Address every comment.** Reply to it, resolve it, or explain why you disagree. Never leave a comment hanging. If you disagree with a reviewer, say so with your reasoning — that is a normal and useful part of review, not a confrontation.
3. **AI review.** Run the repository's AI reviewer (CodeRabbit or GitHub Copilot) and work through its comments the same way. Some of them will be noise; say so and move on. Some of them will be real.
4. **Then request my review**, or that of another maintainer, and mark the pull request ready.

The order matters.
By the time I read a pull request, the obvious problems should already be gone.
That is what makes it possible for me to review your work in a reasonable amount of time — and it is why peer review is a requirement here rather than a suggestion.

Reviewing other people's pull requests is part of your contribution too, not a favour you do for them.
You will learn more from reading someone else's change than from writing your own.

## Merging

:::danger

Never merge your own pull request.
Wait for a maintainer to review and approve it.

:::

Once approved, the change is merged into the integration branch — `development` where the repository has one.
Keep the description up to date if the change evolves during review, since that description is what ends up in the project's history.

## If it does not get merged

Sometimes the answer is "not like this", or "let us wait".
That is not a judgement on you.
The discussion on the issue and the pull request stays available, and it is often the most useful thing to hand to the next person who tries — which is exactly why I ask for that discussion to happen on GitHub in the first place.
