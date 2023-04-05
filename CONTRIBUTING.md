# Contributing Guide

This document describes the processes and standards which govern contributing to DX AUTOMATION.

## Communication

Please direct all general questions, suggestions, and discussion about contributing to [#dx-automation](https://ncino.slack.com/app_redirect?channel=dx-automation).

Any tool specific commands can be directed to the tool owning team.

- provision: [#pde-dx-sf-platform](https://ncino.slack.com/app_redirect?channel=pde-dx-sf-platform)

### Directories

The directory structure of the repository separates functionality by command.

- `command`: lists all commands by subfolders which can be executed running the dx-auto tool
- 'test': lists all tests by ccommands by subfolders which can be executed running the test suite

## Setup

To set up a development environment, follow the steps below in order as listed.

### Checkout

Checkout and branch https://github.com/ncino/force-sdk-soa.

```bash
$ git clone -n https://github.com/ncino/dx-automation.git
$ cd dx-automation/
$ git checkout -B <BRANCH> origin/<TARGET> --no-track
```
Replace `<BRANCH>` with the name of the working branch and `<TARGET>` with the appropriate target branch according to the [branch structure](#branches).

### Install

Install node dependencies in `force-sdk-soa` and its subdirectories.

```bash
$ npm install
```

### Link

Creates a symbolic link between globally installed npm package and the local project. Allows for locally testing commonds locally using the base 'dx-auto' command.

```bash
$ npm link
```

### Build

Removes the 'dist' directory and all of its contents then builds all projects referenced in the current project's 'tsconfig.json' file. Ultimately removing and rebuilding the dist directory which allows for executing the latest command.

```bash
$ npm run build
```

### All

Allows for a quick development workflow when it's desired to test changes to commands. Consists of 'npm install', 'npm link' and 'npm run build'.

```bash
$ npm run all
```
