import colors from './colors.js';
import { Levels, Level, TemplateVariables, Config } from './types';

const levels: Levels = {
	fatal: { priority: 0, color: '{bgBlack}{red}' },
	panic: { priority: 10, color: '{red}' },
	error: { priority: 20, color: '{brightRed}' },
	warn: { priority: 30, color: '{yellow}' },
	success: { priority: 40, color: '{green}' },
	notice: { priority: 50, color: '{brightBlue}' },
	info: { priority: 60, color: '{cyan}' },
	debug: { priority: 70, color: '{magenta}' },
	trace: { priority: 80, color: '{white}' },
};

const colorize = (text: string): string =>
	Object.keys(colors).reduce((result, color) => result.replace(new RegExp(`{${color}}(.*?)`, 'g'), `${colors[color]}$1`), text);
const renderTemplate = (template: string, variables: TemplateVariables): string =>
	Object.keys(variables).reduce((result, key) => result.replace(new RegExp(`%${key}`, 'g'), String(variables[key])), template);
const getFormattedTime = (): string => new Date().toLocaleTimeString('en-US', { hour12: false });

class Logger {
	private config: Config;
	private name: string;
	private level: number;
	private format: string;
	private levels: Levels;

	constructor(config: Config) {
		this.config = config;
		this.name = config.name || '';
		this.level = config.level || 6;
		this.format = config.format || '[%level%]';
		this.levels = levels;
	}

	log = (level: string, ...message: any[]): void => {
		if (this.config.enabled && this.levels[level].priority <= this.config.level && this.config.level != -1) {
			const getLine = () =>
				new Error('logger').stack
					.split('\n')
					.filter((a) => !/logger\.ts:\d+:\d+|logger\.js:\d+:\d+/.test(a))[1]
					.trim()
					.split('/')
					.at(-1);

			const template = renderTemplate(this.format, {
				time: getFormattedTime(),
				name: this.name,
				pid: process.pid,
				level: level,
				color: this.levels[level].color,
				file: getLine(),
			});

			const colored = colorize(template);
			console.log(colored, ...message);
		}
	};

	fatal = (...message: any[]): void => this.log('fatal', ...message);
	panic = (...message: any[]): void => this.log('panic', ...message);
	error = (...message: any[]): void => this.log('error', ...message);
	warn = (...message: any[]): void => this.log('warn', ...message);
	success = (...message: any[]): void => this.log('success', ...message);
	notice = (...message: any[]): void => this.log('notice', ...message);
	info = (...message: any[]): void => this.log('info', ...message);
	debug = (...message: any[]): void => this.log('debug', ...message);
	trace = (...message: any[]): void => this.log('trace', ...message);
}

export default Logger;
