---
sidebar_position: 5
title: Collaboration on Python Projects
tags:
  - supervision
keywords: 
  - Python collaboration
  - virtual environments
  - linting
  - testing
  - ruff
  - uv
  - pipenv
image: assets/img/python_logo.png
description: This page summarises how I like to collaborate on Python projects
last_update:
  author: Federico Tartarini
---

# How to collaborate with me on Python projects

:::info

This page is an instruction manual for collaborating with me on Python-based research projects.

:::

## Python version and environment management

- The required Python version is specified in the file created by `uv` or `pipenv` (e.g., `pyproject.toml`, `Pipfile`).
- Always use a virtual environment for development. Prefer `uv` or `pipenv` for creating and managing environments.
- Install dependencies using:
  ```bash
  uv sync
  # or 
  uv pip install -r requirements.txt
  # or
  pipenv install
  ```

## Code formatting and linting

- Use [ruff](https://github.com/astral-sh/ruff) for linting and formatting. We are migrating away from Black.
- Ensure your code passes ruff checks before submitting a pull request.
- Example command:
  ```bash
  ruff check .
  ruff format .
  ```

## Testing

- All new features must be tested with [pytest](https://docs.pytest.org/en/stable/) before submitting a pull request.
- Add tests for new functions, classes, and edge cases.
- Run tests locally:
  ```bash
  pytest
  ```

## Jupyter notebooks

- Please refrain from using Jupyter notebooks unless strictly necessary. Prefer scripts and modules for reproducibility and maintainability.

## Pre-commit hooks

- Ideally, all projects should use [pre-commit](https://pre-commit.com/) hooks for linting and formatting, but this is not yet implemented.
- If you want to set up pre-commit, see [pre-commit documentation](https://pre-commit.com/).

## Pull requests and code review

- Address all [Coderabbit](https://coderabbit.ai/) comments after submitting a pull request, if Coderabbit is enabled for the repository.
- Follow the same pull request and commit guidelines as described in the [GitHub collaboration page](3_collaboration_github.md).

## Dependency and configuration files

- Use `pyproject.toml` (for uv) or `Pipfile` (for pipenv) to specify dependencies and Python version.
- Do not manually edit `requirements.txt` if using uv or pipenv; generate it from your environment manager.

## General tips

- Follow PEP 8 style guidelines and project conventions.
- Document your code and add docstrings to all functions and classes.
- Avoid global variables; use function parameters and modular code.
- Use pandas for data manipulation and numpy for numerical computations when appropriate.
- Add error handling and logging for debugging.
- Prefer using `Enum` classes for code sanitation and to store constants or string values that are reused in multiple places.

:::note

If you have suggestions to improve our Python workflow, please let me know.

:::
