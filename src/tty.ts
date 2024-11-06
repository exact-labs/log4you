import * as tty from 'node:tty';

/* borrowed from: https://github.com/jorgebucaran/colorette */
const { env = {}, argv = [], platform = '' } = typeof process === 'undefined' ? {} : process;
const isDisabled = 'NO_COLOR' in env || argv.includes('--no-color');
const isForced = 'FORCE_COLOR' in env || argv.includes('--color');
const isWindows = platform === 'win32';
const isDumbTerminal = env.TERM === 'dumb';
const isCompatibleTerminal = tty && tty.isatty && tty.isatty(1) && env.TERM && !isDumbTerminal;
const isCI = 'CI' in env && ('GITHUB_ACTIONS' in env || 'GITLAB_CI' in env || 'CIRCLECI' in env);

export const isColorSupported: Boolean = !isDisabled && (isForced || (isWindows && !isDumbTerminal) || isCompatibleTerminal || isCI);
