# Proof of Concept: DGC JSON Data Validation with extended JSON Schemas 


## Idea

Instead of using different mechanisms for validating the structure, taxonomy ("ValueSets") and business rules of DGC JSON Data a *standardized* JSON Schema validation mechanism is leveraged for an integral pre-check. 

During the DGC issuance workflow passing this pre-check could be a mandatory assertion for further processing.

During the DGC verification workflow a successful pre-check could be required for the further application of the business rule logic.

## Overview

![](doc/images/DGC-Schema-JSON-Validation-20210517.png)

## Usage

### /data

#### /dgc-testdata-latest

The test data comes from the [DGC Test Data Repository](https://github.com/eu-digital-green-certificates/dgc-testdata)

Feel free to update the test data regularly.

#### /examples-latest

The test data comes from the [Digital Green Certificate Schema](https://github.com/ehn-digital-green-development/ehn-dgc-schema) project.

Feel free to use your own examples.

***

### /resources-tmp

Here are the temporary JSON schema files stored.

The generated file

*DGC.Schema.Combined.Full.json*

is the combined and value-extended full JSON schema used for all further validations.

***

### /spec

#### /structure/jsonschema

This folder contains the different official release versions of the 
 [Digital Green Certificate Schema](https://github.com/ehn-digital-green-development/ehn-dgc-schema).

#### /structure/taxonomy

This folder contains the DGC taxonomy in form of "ValueSets" from the
[Digital Green Certificate Schema](https://github.com/ehn-digital-green-development/ehn-dgc-schema) repository.


***

### /src

This place is for different prototype implementations.

#### /js

Here you can find a JS (ES6) prototype implementation for the **updater** and the **validator**.

Feel free to try them out <ins>at your own risk</ins>:

1.) Install NPM and dependencies from the *main package folder*

```
npm i
```


2.) Run the updater from the *main package folder*

```
npm run updater
```

*Always run it again after updating /spec data.*


3.) Run the validator from the *main package folder*

```
npm run validator
```
*Run it again after updating /data files.*

4.) Check the validation log files under /test



### /test

#### /dgc-testdata-latest

Here you can find the validation test log files for the files validated from /data/dgc-testdata-latest

#### /examples-latest

Here you can find the validation test log files for the files validated from /data/exmamples-latest

####

## ToDo

-[ ] Add error handling
  -[ ] JSON not parsable
  -[ ] Invalid schema ver
  -[ ] ...

## Questions

Please feel free to create an issue.


## License

For the source code under /src and this documentation:

&copy; 2021 miguelzapaton and all other contributors

Licensed under the **Apache License, Version 2.0** (the "License"); you may not use this file except in compliance with the License.

You may obtain a copy of the License at https://www.apache.org/licenses/LICENSE-2.0.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the [LICENSE](./LICENSE) for the specific language governing permissions and limitations under the License.
