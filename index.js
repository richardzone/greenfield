#!/usr/bin/env node

const chalk = require('chalk');
const path = require('path');
const fs = require('fs-extra');
const GitHubApi = require('github');
const simpleGit = require('simple-git/promise');
const idx = require('idx');
const yargs = require('yargs');

var argv = yargs
  .usage('Usage: $0 <command> [options]')
  .command('create', 'Bootstrap a brand new project')
  .example('$0 create --name quokka-project --techstack react', 'Create a new React project named "quokka-project"')
  .wrap(yargs.terminalWidth())
  .nargs('create', 2)
  .describe('create', 'Create a project')
  .demandOption(['name', 'techstack'])
  .help('h')
  .alias('h', 'help')
  .epilog('Louis, I think this is the beginning of a beautiful project!')
  .argv;