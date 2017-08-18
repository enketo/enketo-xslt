## Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

[1.13.0] - 2017-08-18
---------------------
##### Added
- Support for appearance="numbers" on text inputs.

[1.12.0] - 2017-07-12
---------------------
##### Added
- Optional support for oc:relevantMsg.

[1.11.2] - 2017-07-03
---------------------
##### Fixed
- Readonly select options do not get the disabled attribute.

[1.11.1] - 2017-05-15
----------------------
##### Fixed
- Value of image-customization attribute not copied.

[1.11.0] - 2017-05-15
----------------------
##### Added
- Support for very custom image-customization attribute (KoBoToolbox).

[1.10.0] - 2017-04-12
----------------------
##### Changed
- Repeat output now includes a repeat-info element. **Warning: major backwards-incompatible change** 

[1.9.1] - 2017-03-22
----------------------
##### Changed
- Only add 'note' class to readonly questions that do not have a calculate bind attribute.

[1.9.0] - 2017-02-28
----------------------
##### Added
- Support for autocomplete appearance -> HTML datalist.

[1.8.1] - 2017-02-23
----------------------
##### Fixed
- Media labels for itemsets are missing the data-itext-id attribute.

[1.8.0] - 2017-02-17
----------------------
##### Added
- Support for the accept attribute that has preference over the mediatype attribute.

[1.7.0] - 2016-11-30
----------------------
##### Added
- Add preload attributes to form control elements.

[1.6.0] - 2016-11-23
----------------------
##### Changed
- Readonly questions now also get the "question" class. The "note" class is now complementary for readonly questions.

[1.5.0] - 2016-07-13
----------------------
##### Changed
- Show "*" for all questions with required expressions.
- Switched to enketo namespace for "for" attribute.

[1.4.1] - 2016-05-20
----------------------
##### Fixed
- No readonly support for select minimal.

[1.4.0] - 2016-05-04
----------------------
##### Added
- Support for "orx:for" attribute.

[1.3.0] - 2016-05-03
----------------------
##### Added
- Proper support for namespaces. **Warning: requires enketo-core 3.7.0+**
