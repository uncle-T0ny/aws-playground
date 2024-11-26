const assert = require('assert');

describe('Lambda Integration Test', () => {
    it('second test name', async () => {
        const response = await fetch('https://eb9xvwsprg.execute-api.ca-central-1.amazonaws.com/dev/hello-test-v8');
        assert.strictEqual(response.status, 203);
    });
});