---
sidebar_position: 2
title: Collaboration on Tools
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

## 🏄 How I collaborate on GitHub

I am a strong advocate for using GitHub as a collaboration platform for research projects.
GitHub provides a range of tools and features that can help streamline the research process and enhance collaboration among team members.
I believe that GitHub can be a powerful tool for version control, issue tracking, code review, and project management.
I am not a computer scientist so if you have any suggestions on how to improve our workflow, please let me know.

## How to contribute to a GitHub repository

If you are new to GitHub or need a refresher on how to contribute to a repository, here are some basic steps to get you started:

# First Contributions

This project aims to simplify and guide the way beginners make their first contribution. If you are looking to make your first contribution, follow the steps below.

_If you're not comfortable with command line you can use a GUI client like [GitHub Desktop](https://desktop.github.com/) or [GitKraken](https://www.gitkraken.com/)._

#### If you don't have git on your machine, [install it](https://docs.github.com/en/get-started/quickstart/set-up-git).

## Fork this repository

<img align="right" width="300" src="img/fork.png" alt="fork this repository" />

Fork this repository by clicking on the fork button on the top of this page.

This will create a copy of this repository in your account.


## Clone the repository


<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />


<img align="right" width="300" src="assets/img/fork.png" alt="fork this repository" />

[//]: # ()
[//]: # (Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.)

[//]: # ()
[//]: # (Open a terminal and run the following git command:)

[//]: # ()
[//]: # (```bash)

[//]: # (git clone "url you just copied")

[//]: # (```)

[//]: # ()
[//]: # (where "url you just copied" &#40;without the quotation marks&#41; is the url to this repository &#40;your fork of this project&#41;. See the previous steps to obtain the url.)

[//]: # ()
[//]: # (<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />)

[//]: # ()
[//]: # (For example:)

[//]: # ()
[//]: # (```bash)

[//]: # (git clone git@github.com:this-is-you/first-contributions.git)

[//]: # (```)

[//]: # ()
[//]: # (where `this-is-you` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.)

[//]: # ()
[//]: # (## Create a branch)

[//]: # ()
[//]: # (Change to the repository directory on your computer &#40;if you are not already there&#41;:)

[//]: # ()
[//]: # (```bash)

[//]: # (cd first-contributions)

[//]: # (```)

[//]: # ()
[//]: # (Now create a branch using the `git switch` command:)

[//]: # ()
[//]: # (```bash)

[//]: # (git switch -c your-new-branch-name)

[//]: # (```)

[//]: # ()
[//]: # (For example:)

[//]: # ()
[//]: # (```bash)

[//]: # (git switch -c add-alonzo-church)

[//]: # (```)

[//]: # ()
[//]: # (## Make necessary changes and commit those changes)

[//]: # ()
[//]: # (Now open `Contributors.md` file in a text editor, add your name to it. Don't add it at the beginning or end of the file. Put it anywhere in between. Now, save the file.)

[//]: # ()
[//]: # (<img align="right" width="450" src="https://firstcontributions.github.io/assets/Readme/git-status.png" alt="git status" />)

[//]: # ()
[//]: # (If you go to the project directory and execute the command `git status`, you'll see there are changes.)

[//]: # ()
[//]: # (Add those changes to the branch you just created using the `git add` command:)

[//]: # ()
[//]: # (```bash)

[//]: # (git add Contributors.md)

[//]: # (```)

[//]: # ()
[//]: # (Now commit those changes using the `git commit` command:)

[//]: # ()
[//]: # (```bash)

[//]: # (git commit -m "Add your-name to Contributors list")

[//]: # (```)

[//]: # ()
[//]: # (replacing `your-name` with your name.)

[//]: # ()
[//]: # (## Push changes to GitHub)

[//]: # ()
[//]: # (Push your changes using the command `git push`:)

[//]: # ()
[//]: # (```bash)

[//]: # (git push -u origin your-branch-name)

[//]: # (```)

[//]: # ()
[//]: # (replacing `your-branch-name` with the name of the branch you created earlier.)

[//]: # ()
[//]: # (<details>)

[//]: # (<summary> <strong>If you get any errors while pushing, click here:</strong> </summary>)

[//]: # ()
[//]: # (- ### Authentication Error)

[//]: # (     <pre>remote: Support for password authentication was removed on August 13, 2021. Please use a personal access token instead.)

[//]: # (  remote: Please see https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/ for more information.)

[//]: # (  fatal: Authentication failed for 'https://github.com/<your-username>/first-contributions.git/'</pre>)

[//]: # (  Go to [GitHub's tutorial]&#40;https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account&#41; on generating and configuring an SSH key to your account.)

[//]: # ()
[//]: # (</details>)

[//]: # ()
[//]: # (## Submit your changes for review)

[//]: # ()
[//]: # (If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.)

[//]: # ()
[//]: # (<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/compare-and-pull.png" alt="create a pull request" />)

[//]: # ()
[//]: # (Now submit the pull request.)

[//]: # ()
[//]: # (<img style="float: right;" src="https://firstcontributions.github.io/assets/Readme/submit-pull-request.png" alt="submit pull request" />)

[//]: # ()
[//]: # (Soon I'll be merging all your changes into the main branch of this project. You will get a notification email once the changes have been merged.)

[//]: # ()
[//]: # (## Where to go from here?)

[//]: # ()
[//]: # (Congrats! You just completed the standard _fork -> clone -> edit -> pull request_ workflow that you'll often encounter as a contributor!)

[//]: # ()
[//]: # (Celebrate your contribution and share it with your friends and followers by going to [web app]&#40;https://firstcontributions.github.io/#social-share&#41;.)

[//]: # ()
[//]: # (You could join our slack team if you need any help or have any questions. [Join slack team]&#40;https://firstcontributors.slack.com/join/shared_invite/zt-29qhyr9lt-Bi7WLbgGIFqV7aCEG_grvg#/shared-invite/email&#41;.)

[//]: # ()
[//]: # (Now let's get you started with contributing to other projects. We've compiled a list of projects with easy issues you can get started on. Check out [the list of projects in the web app]&#40;https://firstcontributions.github.io/#project-list&#41;.)

[//]: # ()
[//]: # (### [Additional material]&#40;additional-material/git_workflow_scenarios/additional-material.md&#41;)