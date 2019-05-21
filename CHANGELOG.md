## Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

[1.21.2] - 2019-05-20
---------------------
##### Changed
- `columns-flex` is now `columns-pack` (last-minute spec change).

[1.21.1] - 2019-05-17
---------------------
##### Changed
- Convert deprecated select/1 appearances to new appearances.

[1.21.0] - 2018-09-11
---------------------
##### Changed
- Print hints are now guidance hints (`form="guidance"`) to comply with ODK XForms Specification.

[1.20.0] - 2018-08-31
---------------------
##### Added
- Propagate custom oc:constraint-type and oc:required-type attributes.

##### Changed
- Correct deprecated "form-data-post" value for _method_ attribute of submission element to "post".

[1.19.3] - 2018-07-24
---------------------
##### Changed
- Note class no longer applied in enketo-xlst.

[1.19.2] - 2018-07-19
---------------------
##### Fixed
- Randomize() doesn't work for itemsets that use itext() labels.

[1.19.1] - 2018-07-19
---------------------
##### Changed
- ODK namespace for `<rank>` was changed to "http://www.opendatakit.org/xforms".

[1.19.0] - 2018-06-15
---------------------
##### Added
- Support for Ranking widget.

[1.18.0] - 2018-06-04
---------------------
##### Added
- Support for Range widget.

[1.17.0] - 2018-02-19
---------------------
##### Added
- Support for appearance "new", "new-front", "new-rear".

[1.16.1] - 2018-01-16
---------------------
##### Fixed
- Constraint message not added for readonly questions.

[1.16.0] - 2018-01-10
---------------------
##### Added
- Pass oc:external as oc-external attribute.

[1.15.5] - 2018-01-03
---------------------
##### Changed
- Syntax to facilitate incorporation into a executable application.

[1.15.4] - 2017-12-22
---------------------
##### Fixed
- Workaround for an XLSForm limitation by moving "no-collapse" appearance of repeat to its parent group.

[1.15.3] - 2017-12-20
---------------------
##### Fixed
- Npm refuses to install 1.15.2, since December 19th 2017 or before. Trying to resolve this by publishing a new version without changes.

[1.15.2] - 2017-11-29
---------------------
##### Fixed
- No support for groups without `ref` attribute with a repeat child.

[1.15.1] - 2017-10-10
---------------------
##### Fixed
- Workaround for an XLSForm limitation by moving "compact" appearance of repeat to its parent group.

[1.15.0] - 2017-09-26
---------------------
##### Added
- Support for very custom 'kb:flash' body attribute (KoBoToolbox).

[1.14.0] - 2017-09-20
---------------------
##### Added
- "or-branch" class on calculated items without a form control

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
