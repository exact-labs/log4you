import dts from 'npm-dts';
import { build } from 'esbuild';

build({
	entryPoints: ['src/logger.ts'],
	bundle: true,
	minify: true,
	platform: 'node',
	format: 'esm',
	outfile: 'dist/logger.js',
});

new dts.Generator({
	entry: 'src/logger.ts',
	output: 'dist/logger.d.ts',
}).generate();
