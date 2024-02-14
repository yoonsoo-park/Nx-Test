import { expect, test } from '@oclif/test';

describe('provision', () => {
	test.stdout()
		.command(['provision'])
		.it('runs provision cmd', (ctx) => {
			expect(ctx.stdout).to.contain(
				'\nWelcome to provision...A State Provisioning Tool...COMING SOON\n'
			);
		});
});
