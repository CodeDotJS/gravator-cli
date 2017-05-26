#!/usr/bin/env node

'use strict';

const dns = require('dns');
const got = require('got');
const logUpdate = require('log-update');
const ora = require('ora');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');

updateNotifier({
	pkg
}).notify();
const spinner = ora();
const arg = process.argv[2];
const opts = process.argv[3];

if (!arg) {
	console.log(`
 Usage: gravator <username>
        gravator <username> [options]

 Options:
   --id
   --hash
   --requestHash
   --profileUrl
   --preferredUsername
   --thumbnailUrl
   --displayName
   --aboutMe
   --currentLocation

 Example:
   $ gravator matt --id
   $ gravator matt --hash

 Note: username is always 'foo'@example.com
				`);
	process.exit(1);
}

dns.lookup('en.gravatar.com', err => {
	if (err) {
		logUpdate(`\n› Please check your internet connection\n`);
		process.exit(1);
	} else {
		logUpdate();
		spinner.text = `Please wait!`;
		spinner.start();
	}
});

if (!opts) {
	logUpdate(`\n› option flag required\n`);
	process.exit(1);
}

const getKeyByValue = (object, value) => {
	return Object.keys(object).find(key => object[key] === value);
};

const prop = {
	id: '--id',
	hash: '--hash',
	requestHash: '--requestHash',
	profileUrl: '--profileUrl',
	preferredUsername: '--preferredUsername',
	thumbnailUrl: '--thumbnailUrl',
	displayName: '--displayName',
	aboutMe: '--aboutMe',
	currentLocation: '--currentLocation'
};

const propKey = getKeyByValue(prop, opts);

const url = `https://en.gravatar.com/${arg}.json`;

if (arg && opts) {
	got(url, {
		json: true
	}).then(res => {
		const noop = res.body;
		const data = noop.entry[0][propKey];
		logUpdate(`\n› ${propKey}: ${data}\n`);
		spinner.stop();
	}).catch(err => {
		if (err) {
			process.exit(1);
		}
	});
}
