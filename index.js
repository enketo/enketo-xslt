var xslModel, xslForm,
	fs = require('fs'),
	path = require('path'),
	xslModelPath = path.resolve(__dirname, './xsl/openrosa2xmlmodel.xsl'),
	xslFormPath = path.resolve(__dirname, './xsl/openrosa2html5form.xsl');

// only read once
xslModel = fs.readFileSync(xslModelPath, {encoding: 'utf8'});
xslForm = fs.readFileSync(xslFormPath, {encoding: 'utf8'});

module.exports = {
	xslModel: xslModel,
	xslForm: xslForm
};
