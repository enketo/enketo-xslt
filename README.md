Enketo XSLT [![Build Status](https://travis-ci.org/enketo/enketo-xslt.svg?branch=master)](https://travis-ci.org/enketo/enketo-xslt)
===========

XSLT sheets used to transform OpenRosa-flavoured XForms into an HTML form and XML instance.


## Install for use in node.js app

```
npm install enketo-xslt --save
```

## Use in Node

```
var sheets = require('enketo-xslt');

console.log('form sheet', sheets.xslForm);
console.log('model sheet', sheets.xslModel);
```

## Install in non-node.js app

Use as git submodule and read the 2 .xsl files as required.
