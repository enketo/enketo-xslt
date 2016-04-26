Enketo XSLT 
===========

[![npm version](https://badge.fury.io/js/enketo-xslt.svg)](http://badge.fury.io/js/enketo-xslt) [![Build Status](https://travis-ci.org/enketo/enketo-xslt.svg?branch=master)](https://travis-ci.org/enketo/enketo-xslt)

XSLT sheets used to transform OpenRosa-flavoured XForms into an HTML form and XML instance.


### Install for use in node.js app

```
npm install enketo-xslt --save
```

### Use in Node

```
var sheets = require('enketo-xslt');

console.log('form sheet', sheets.xslForm);
console.log('model sheet', sheets.xslModel);
```

### Install in non-node.js app

Use as git submodule and read the two .xsl files as required.

### License

See [license document](./LICENSE).

In addition, any product that uses enketo-xslt is required to have a "Powered by Enketo" footer, according to the specifications below, on all screens in which the output of enketo-xslt, or parts thereof, are used, unless explicity exempted from this requirement by Enketo LLC in writing. Partners and sponsors of the Enketo Project, listed on [https://enketo.org/#about](https://enketo.org/#about) and on [https://github.com/enketo/enketo-core#sponsors](https://github.com/enketo/enketo-core#sponsors) are exempted from this requirements and so are contributors listed in [package.json](./package.json).

The aim of this requirement is to force adopters to give something back to the Enketo project, by at least spreading the word and thereby encouraging further adoption.

Specifications:

1. The word "Enketo" is displayed using Enketo's logo.
2. The minimum font-size of "Powered by" is 12 points.
3. The minimum height of the Enketo logo matches the font-size used.
4. The Enketo logo is hyperlinked to https://enketo.org

Example:

Powered by <a href="https://enketo.org"><img height="16" style="height: 16px;" src="https://enketo.org/images/enketo_bare_100x37.png" /></a>

### Change Log

See [change log](./CHANGELOG.md)
