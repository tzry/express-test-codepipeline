const assert = require('assert');
const shouldFail = process.env.SHOULD_FAIL

describe('test', function () {
    it('test shouldFail', function () {
        assert(!Boolean(shouldFail))
    });
});