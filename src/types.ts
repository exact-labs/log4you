type Levels = { [key: string]: Level };
type Colors = { [key: string]: string };
type Level = { priority: number; color: string };
type TemplateVariables = { [key: string]: string | number };

interface Config {
	name?: string;
	level?: number;
	format?: string;
	enabled?: boolean;
}

export type { Levels, Colors, Level, TemplateVariables, Config };
