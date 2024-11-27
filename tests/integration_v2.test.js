const assert = require('assert');

describe('Lambda Integration Test v2', () => {
    it('the other test v2 should return a successful response', async () => {
        const response = await fetch('https://eb9xvwsprg.execute-api.ca-central-1.amazonaws.com/dev/hello-test-v8');
        assert.strictEqual(response.status, 2001);
    });
});