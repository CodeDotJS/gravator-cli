import childProces from 'child_process';
import test from 'ava';

test.cb(t => {
	const cp = childProces.spawn('./cli.js', ['rushforlinux', '--id'], {stdio: 'inherit'});

	cp.on('error', t.ifError);

	cp.on('close', code => {
		t.is(code, 0);
		t.end();
	});
});

