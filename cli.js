#!/usr/bin/env node

'use strict';

const gravator = require('gravator');

const colors = require('colors/safe');

const argv = require('yargs')

    .usage(colors.cyan.bold('\n Usage: $0 -u [user.name]'))

    .demand(['u'])

    .describe('u', '❱ gravatar username')

    .example('$0 -u rushforlinux')

    .argv;

gravator(argv.u).then(user => {
	const inf = [];

	const informationRow = (prefix, key) => {
		if (user[key]) {
			inf.push(`${prefix}: ${user[key]}`);
		}
	};

	console.log('\n');

	informationRow(' ❱ Name        ', 'username');

	informationRow(' ❱ Location    ', 'location');

	informationRow(' ❱ Bio         ', 'biography');

	informationRow(' ❱ Wordpress   ', 'wordpress');

	informationRow(' ❱ Twitter     ', 'twitter');

	informationRow(' ❱ Facebook    ', 'facebook');

	informationRow(' ❱ Flickr      ', 'flickr');

	informationRow(' ❱ Google+     ', 'googlePlus');

	informationRow(' ❱ LinkedIn    ', 'linkedIn');

	informationRow(' ❱ YouTube     ', 'youtube');

	informationRow(' ❱ Blogger     ', 'blogger');

	informationRow(' ❱ Tumblr      ', 'tumblr');

	console.log(inf.join('\n'));

	console.log('\n');
});
