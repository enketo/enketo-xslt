var xslModel, xslForm,
	fs = require('fs'),
	path = require('path'),
	xslModelPath = path.resolve(__dirname, './openrosa2xmlmodel.xsl'),
	xslFormPath = path.resolve(__dirname, './openrosa2html5form.xsl');

// only read once
xslModel = fs.readFileSync(xslModelPath);
xslForm = fs.readFileSync(xslFormPath);

module.exports = {
	xslModel: xslModel,
	xslForm: xslForm
};
