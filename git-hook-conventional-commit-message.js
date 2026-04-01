#!/usr/bin/env node

import fs from 'node:fs';
import chalk from 'chalk';
import child_process from 'node:child_process';

const conventionalCommitMessageRegExp =
  /^(build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test)(\(([\w\-,.]+)\))?(!)?: ([\w ])+([\s\S]*)/i;

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

function validateMessageStructure(message) {
  const isConventionalCommit = new RegExp(conventionalCommitMessageRegExp).test(message);

  if (!isConventionalCommit) {
    return !!message.startsWith('Merge ');
  }

  return true;
}

/**
 * Returns list of buildable libs that should be added to the scope.
 *
 */

let exitCode = 0;
const message = getCommitMessage();

if (typeof message !== 'string') {
  console.log('Could not open commit message file.');
  exitCode = 1;
} else {
  if (!validateMessageStructure(message)) {
    console.log(
      chalk.red(chalk.bold('Cannot commit:')),
      chalk.bold('the commit message does not comply with conventional commits specification.'),
    );
    console.log('Commit message should have next structure:');
    console.log(chalk.italic('<type>: <description>'));
    console.log(chalk.italic('[optional body]'));
    console.log(chalk.italic('[optional footer(s)]'));
    console.log(chalk.bold('Example:'), chalk.italic('feat: add feature module'));

    console.log(
      chalk.bold('Available types:'),
      'build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test.',
    );

    console.log('');

    exitCode = 1;
  } else {
    // Write updated message back to file
    const commitMessageFile = `${projectRootDir}/.git/COMMIT_EDITMSG`;

    try {
      fs.writeFileSync(commitMessageFile, message, { encoding: 'utf-8' });
    } catch (err) {
      console.log(`\nCould not write to commit message file.`, skipMsgErr);
    }
  }
}

if (exitCode) {
  process.exit(exitCode);
}
