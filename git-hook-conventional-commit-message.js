#!/usr/bin/env node

import fs from 'node:fs';
import chalk from 'chalk';
import child_process from 'node:child_process';

const conventionalCommitMessageRegExp =
  /^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test):([\w ])+([\s\S]*)/i;

function getProjectRootDir() {
  return child_process
    .execSync('git rev-parse --show-toplevel', { encoding: 'utf-8' })
    .replace(/\r\n/g, '\n')
    .split('\n')[0];
}

const projectRootDir = getProjectRootDir();

function getCommitMessage() {
  const commitMessageFile = `${projectRootDir}/.git/COMMIT_EDITMSG`;

  try {
    fs.existsSync(commitMessageFile);
  } catch (err) {
    return;
  }

  return fs.readFileSync(commitMessageFile, { encoding: 'utf-8' });
}

function getMessageScope(message) {
  const match = message.match(conventionalCommitMessageRegExp);

  if (match && match[3]) {
    return match[3];
  }

  return '';
}

let exitCode = 0;
const message = getCommitMessage();

if (typeof message !== 'string') {
  console.log('Could not open commit message file.');
  exitCode = 1;
} else {
  const scope = getMessageScope(message);

  console.log(
    chalk.red(chalk.bold('Cannot commit:')),
    chalk.bold('the commit message does not comply with conventional commits specification.'),
  );
  console.log('Commit message should have next structure:');
  console.log(chalk.italic('<type>(<ticket number>,<project name>): <description>'));
  console.log(chalk.italic('[optional body]'));
  console.log(chalk.italic('[optional footer(s)]'));
  console.log(chalk.bold('Example:'), chalk.italic('feat: add feature module'));

  console.log(
    chalk.bold('Available types:'),
    'build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test.',
  );

  if (scope.includes(' ')) {
    console.log(chalk.bold('No comma in the scope!'));
  }
  console.log('');

  exitCode = 1;
}

if (exitCode) {
  process.exit(exitCode);
}
