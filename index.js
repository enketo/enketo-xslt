const fs = require( 'fs' );
const path = require( 'path' );
const xslModelPath = path.join( __dirname, './xsl/openrosa2xmlmodel.xsl' );
const xslFormPath = path.join( __dirname, './xsl/openrosa2html5form.xsl' );

// only read once
const xslModel = fs.readFileSync( xslModelPath, { encoding: 'utf8' } );
const xslForm = fs.readFileSync( xslFormPath, { encoding: 'utf8' } );

module.exports = { xslModel, xslForm };