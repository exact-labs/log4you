const { build } = require('esbuild');
const { Generator } = require('npm-dts');
const { dependencies } = require('./package.json');

build({
	entryPoints: ['src/logger.ts'],
	bundle: true,
	minify: true,
	platform: 'node',
	format: 'esm',
	outfile: 'dist/logger.js',
	external: Object.keys(dependencies),
});

new Generator({
	entry: 'src/logger.ts',
	output: 'dist/logger.d.ts',
}).generate();
