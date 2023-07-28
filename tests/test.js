import Logger from '../dist/logger.js';

const log = new Logger({
	enabled: true,
	level: 80,
	name: 'app_name',
	format: '{brightCyan}%time{reset} {white}(app:%name pid:%pid %file) %color[%level]{reset}',
});

log.fatal('Look, we can');
log.panic({ do: 'json too!', so: true });
log.error('even the', 69420, 'numbers work!');
log.warn('what can I say');
log.success('does it feel');
log.notice('✨ emoji support');
log.info({ big: { huge: { json: 'thing' } } });
log.debug('AND!', 'And..');
log.trace('great use of time');
