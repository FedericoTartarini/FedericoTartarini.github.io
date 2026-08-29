---
sidebar_position: 1
title: Before you start
tags:
  - collaboration
  - supervision
keywords:
  - open source contribution
  - onboarding
  - capstone project
  - documentation feedback
image: assets/img/website_screenshot.png
description: What to do in your first few days on one of my projects, before you write any code
last_update:
  author: Federico Tartarini
---

# Before you start

:::info

This is the first of four pages describing how I like people to work on my projects.
It is written for capstone students, but it applies to anyone who wants to contribute.

:::

## The one rule: do not break the tool

The tools I maintain are not demos.
They are used by thousands of people every month, and in some cases they inform decisions about whether it is safe to train, compete, or work outdoors.

That changes what "a good contribution" means.
A change that adds a feature but breaks something existing is a net loss, and the person who pays for it is a user who has never heard of us.

There are two distinct ways to cause damage, and they need different kinds of care:

* **Interface tools** — the [Sports Heat Tool](https://sma-heat-policy.sydney.edu.au/), [HeatWatch](https://heatwatch.sydney.edu.au/), and similar apps.
  Here the failure mode is visible: the app crashes, a button stops working, or the layout breaks on a phone.
  Most of our users are on mobile, so "it works on my laptop" is not a test.
* **Calculation code** — [pythermalcomfort](https://github.com/CenterForTheBuiltEnvironment/pythermalcomfort), [jsthermalcomfort](https://github.com/FedericoTartarini/jsthermalcomfort), and the models behind the apps.
  Here the failure mode is invisible: the code runs happily and returns a wrong number.
  This is the worse of the two.
  Every equation has to match the paper or standard it comes from, and that source has to reflect current evidence.

Mistakes will happen — they happen to me too.
What I ask is that you treat "could this break something?" as the first question you ask of your own work, not the last.

## Step 1: use the tool before you read the code

Before you open the repository, use the thing as a normal user would.
Open the web app on your phone, put in a real location, and see what it tells you.
If it is a Python package, install it and calculate something.

Do this even if you do not understand the underlying physiology.
You are not being asked to evaluate the science yet — you are being asked to find out what the tool actually does, so that later you can tell whether your change made it better or worse.

## Step 2: read the documentation, and try to follow it

Then read the README, the contribution guidelines, and the documentation.

Read them actively.
Pick a function from the pythermalcomfort docs and try to compute a result using only what is written there.
If you cannot get from the documentation to an answer, the documentation has a problem — not you.

## Step 3: be critical, and open an issue

This is the part people skip, and it is the part I care about most.

If anything is unclear, missing, out of date, or simply wrong — in the README, the contribution guidelines, the docs, or the code — **open an issue and say so**.

Two reasons:

* If it blocked you, it is blocking every other newcomer who arrives after you.
  You are the only person in a position to notice it, because once you have learned the workaround you will never see it again.
* It is the fastest way to make a real contribution, and a well-written issue is worth as much to me as a patch.

This also sets the tone for how we work together.
I am not going to hand you a step-by-step task list.
I expect the flow of information to go both ways: I tell you what needs solving, and you tell me where the project is getting in your way.

## Setting up

The mechanics are on the other pages, so I am not repeating them here:

* [Collaboration on GitHub](../5_collaboration_github.md) — account, Git, forking and cloning.
* [Collaboration on Python Projects](../7_collaboration_python.md) — environments with `uv`, formatting with `ruff`, testing with `pytest`.

Once you are set up, move on to [picking an issue](./2_picking_an_issue.md).
