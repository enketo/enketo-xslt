## Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

[1.8.1] - 2016-02-23
----------------------
##### Fixed
- Media labels for itemsets are missing the data-itext-id attribute.

[1.8.0] - 2016-02-17
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
