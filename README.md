# log4you

A simple library for logging.

## Usage

```ts
import Logger, { levels, LOG_LEVEL } from 'log4you';

const logger = new Logger({
	enabled: true,
	level: levels[LOG_LEVEL].priority, // based on --level=<name>
	name: 'app_name',
	format: '{brightCyan}%time{reset} {white}(app:%name pid:%pid%file) %color[%level]{reset}',
});
```

<img style="width: 1100px;" src="">
