var sheets = require("../index"),
    assert = require("assert");

describe('sheets', function() {

    it('should return an xslForm sheet', function() {
        assert.equal(typeof sheets.xslForm, 'string');
        assert.equal(sheets.xslForm.length > 0, true);
    });

    it('should return an xslForm sheet', function() {
        assert.equal(typeof sheets.xslModel, 'string');
        assert.equal(sheets.xslModel.length > 0, true);
    });

});
