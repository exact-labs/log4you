# log4you

A simple library for logging.

## Usage

```ts
import Logger from 'log4you';

const logger = new Logger({
	enabled: true,
	level: 80,
	name: 'app_name',
	format: '{brightCyan}%time{reset} {white}(app:%name pid:%pid %file) %color[%level]{reset}',
});
```
