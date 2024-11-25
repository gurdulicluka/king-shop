# King Shop - Project Overview

This document outlines the core commands and instructions you need to know to work with this project.
<br/>

You’ll find instructions on how to build, run, lint, and typecheck the app, as well as other useful scripts such as clearing cache.

## Table of Contents

  - [Prerequisites and Setup](#prerequisites-and-setup)
    - [1. Node.js](#1-nodejs)
    - [2. Yarn](#2-yarn)
    - [3. Clone repository](#3-clone-repository)
    - [4. Install Project Dependencies](#4-install-project-dependencies)
  - [Build Commands](#build-commands)
  - [Local Development](#local-development)
  - [Linting and Code Quality](#linting-and-code-quality)
  - [Typechecking](#typechecking)
  - [Cache Management](#cache-management)

## Prerequisites and Setup

Before working on this project, ensure that the following tools are installed on your system:

### 1. Node.js

Node.js is required to run JavaScript applications and build tools.

- **Download and Install Node.js**: Visit the [official Node.js website](https://nodejs.org/) and download the appropriate installer for your operating system.
- We recommend using the **LTS (Long Term Support)** version for stability.

To verify if Node.js is installed, run the following command in your terminal:

```bash
node -v
```

### 2. Yarn

Yarn is a package manager that helps manage project dependencies and scripts. It works alongside Node.js and is preferred over npm for this project.

- **Download and Install Yarn**: Visit the [official Yarn docs](https://classic.yarnpkg.com/en/) for installing Yarn on your operating system.

To verify if Yarn is installed, run the following command in your terminal:

```bash
yarn -v
```

### 3. Clone repository

Clone with SSH:

```
git clone git@github.com:gurdulicluka/king-shop.git
```

or Clone with HTTP:

```
git clone https://github.com/gurdulicluka/king-shop.git
```

### 4. Install Project Dependencies

Once Node.js and Yarn are installed, navigate to the root directory of the monorepo and install the required node modules:

```bash
yarn install
```

This command installs all project dependencies defined in the package.json.


## Local Development

**App runs at: http://localhost:5173**

- `yarn dev`: Runs the  app on a local development server.

## Build Commands

- `yarn build`: Builds the application.

<br/>

> **Note:**
> Optionally run with `--force` flag at the end of yarn commands, ensuring that the local `node_modules` folder is up to date with the package.json specifications.


## Linting and Code Quality

Commands to check and fix code style issues across the codebase.

  - `yarn lint`: Lints the codebase and shows you potential errors or rules violation defined in the `biome.json` file.
  - `yarn lint:fix`: Lints AND corrects fixable errors..

## Typechecking

TypeScript type checks to ensure consistency across the codebase.

- `yarn typecheck`

## Cache Management

Clearing caches is an important step when facing issues related to outdated code, incorrect builds, or old configurations being used. Caching can sometimes retain older versions of code or styles, which leads to inconsistencies during local development or deployment.

### Common Reasons to Clear Cache

- **Stale CSS Styling**: If you notice that your app is displaying outdated CSS styles, it could be because the cache is holding on to old versions of the compiled CSS files.
- **Old Logic Being Applied**: Sometimes, even after updating your code, old logic or functionality may persist due to caching, leading to confusion during testing or development.
- **Inconsistent Build Artifacts**: Caching can sometimes cause issues where builds do not reflect the latest changes, especially after switching branches or pulling updates.
- **Troubleshooting Build Failures**: If your builds are failing due to unexplained errors, clearing caches can help resolve issues related to stale dependencies or misconfigurations in the build pipeline.

**Commands to clear caches when needed for Vite, and Yarn.**

- Delete the `.vite` folder manually to reset Vite cache.
- `yarn cache clean`: Clears Yarn’s cache.
