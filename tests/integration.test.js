const assert = require('assert');

describe('Lambda Integration Test', () => {
    it('should return a successful response', async () => {
        const response = await fetch('https://XXXXXXX.execute-api.ca-central-1.amazonaws.com/dev/hello-test-v8?requiredKey=true');
        assert.strictEqual(response.status, 200);
    });
});