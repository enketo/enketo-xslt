/* eslint-env mocha */

const sheets = require( '../index' );
const assert = require( 'assert' );

describe( 'sheets', () => {

    it( 'should return an xslForm sheet', () => {
        assert.equal( typeof sheets.xslForm, 'string' );
        assert.equal( sheets.xslForm.length > 0, true );
    } );

    it( 'should return an xslModel sheet', () => {
        assert.equal( typeof sheets.xslModel, 'string' );
        assert.equal( sheets.xslModel.length > 0, true );
    } );

} );