---
sidebar_position: 3
title: Collaboration on GitHub
tags:
  - supervision
keywords: 
  - GitHub collaboration 
image: assets/img/website_screenshot.png
description: This page summarises how I like to collaborate on GitHub
last_update:
  author: Federico Tartarini
---

# Federico Tartarini - How to collaborate with me on GitHub

:::info

This page is an instruction manual for collaborating with me on GitHub.

:::

## How to collaborate with me on GitHub

I am a strong advocate for using GitHub as a collaboration platform for research projects.
GitHub provides a range of tools and features that can help streamline the research process and enhance collaboration among team members.
I believe that GitHub can be a powerful tool for version control, issue tracking, code review, and project management.
I am not a computer scientist so if you have any suggestions on how to improve our workflow, please let me know.

## How to get started with GitHub

1. **Create a GitHub account**: If you don't already have a GitHub account.
2. **Familiarise yourself with GitHub**: If you are new to GitHub, I recommend taking some time to explore the platform and learn about its key features.
3. **Install Git**: Git is a version control system that is used to manage code repositories on GitHub. You can download Git from the [official website](https://git-scm.com/).
4. **Fork and Clone the repository**: Once you have a GitHub account and Git installed, you can clone the repository for our research project to your local machine using the following command:
   ```bash
   git clone
    ```
5. **Create a new branch**: Before making any changes to the codebase, create a new branch to work on. This will help keep your changes separate from the main codebase and make it easier to track your progress.

:::note

Use a descriptive branch name that reflects the purpose of your changes.
For example, if you are working on a new feature, you could name your branch `feature/new-feature`.

:::

7. **Make your changes**: Once you have created a new branch, you can start making changes to the codebase. Be sure to follow the project's coding conventions and guidelines.

:::tip

For example, if you are write Python code use [Black](https://black.readthedocs.io/en/stable/) to format your code.

:::

8. **Commit your changes**: After making your changes, commit them to your branch using the following command:

   In Git, a commit is referring to the state of your code at one specific point in time. Commits with the metadata (author, timestamp, commit message etc). Commits are used for saving progression, stating changes and merging developed pieces with others work.
   
   * **A Good Commit should**:
      * **A commit should be atomic** - it has to represent one and only one logical change. Do not mix several independent changes in one commit.
      * **Descriptive** - the commit message should be descriptive and concise. It should explain what the commit does and why it is necessary. It should be written in the imperative mood.
      * **Follow Conventional Commit Guidelines** - the commit message should follow the [Conventional Commit Guidelines](https://www.conventionalcommits.org/en/v1.0.0/). This will help to automate the release process and generate a changelog. Usually these guidelines interpret in the form of type (feat, fix, chore, refactor docs), and short summary plus occasionally a long explanation
      * **Tested** - the commit should be tested and should not break the existing codebase. It should not introduce new bugs.
      * **Properly scoped** - for example, if you are fixing a bug then the commit message should start with `fix:`, and it should fix the bug in a single commit. If you are adding a new feature, then the commit message should start with `feat:` and it should add the feature in a single commit.
   
   ```
   # Good commit
   git commit -m "feat(login): Add user authentication"
   # Bad commit - missing conventional commit standards, and includes two logic changes
   git commit -m "Add user authentication and update UI styles"
   ```
   
   * **A Bad Commit is**:
      * **Too big** - it is too big and includes several independent changes.
      * **Not descriptive** - the commit message is not descriptive and does not explain what the commit does.
      * **Vague** - the commit message is vague and does not provide enough information about the changes.
      * **Not tested** - the commit contains incomplete code and/or is not tested and introduces new bugs.
      * **Combines unrelated changes** - the commit combines unrelated changes in a single commit.

9. **Push your changes**: Once you have committed your changes, push them to the remote repository using the following command:
   ```bash
    git push origin your-branch-name
    ```
10. **Create a pull request**: After pushing your changes, create a pull request on GitHub to merge your changes into the main codebase. Be sure to provide a detailed description of your changes and any relevant context.

:::danger

The pull request should include the following information:

# Description

Please include a summary of the changes and the related issue. Please also include relevant motivation and context. List any dependencies that are required for this change.

Fixes # (issue)

## Type of change

Please delete options that are not relevant.

- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] This change requires a documentation update

# How Has This Been Tested?

Please describe the tests that you ran to verify your changes. Provide instructions so we can reproduce. Please also list any relevant details for your test configuration

- [ ] Test A
- [ ] Test B

**Test Configuration**:
* Firmware version:
* Hardware:
* Toolchain:
* SDK:

# Checklist:

- [ ] My code follows the style guidelines of this project
- [ ] I have performed a self-review of my code
- [ ] I have commented my code, particularly in hard-to-understand areas
- [ ] I have made corresponding changes to the documentation
- [ ] My changes generate no new warnings
- [ ] I have added tests that prove my fix is effective or that my feature works
- [ ] New and existing unit tests pass locally with my changes
- [ ] Any dependent changes have been merged and published in downstream modules

:::
11. **Review and merge**: Once you have created a pull request, the code owners will review your changes and provide feedback. If everything looks good, they will merge your changes into the main codebase.
:::danger

Never merge your own pull request. Always wait for the code owners to review and approve your changes before merging.

:::

12. **Stay up to date**: Be sure to pull the latest changes from the main codebase regularly to stay up to date with the project's progress.
13. **Collaborate**: GitHub provides a range of collaboration tools, such as issues, projects, and wikis, that can help streamline the research process and enhance collaboration among team members. Be sure to take advantage of these tools to stay organised and communicate effectively with your team.