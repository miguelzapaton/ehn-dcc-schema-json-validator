import * as fs from 'fs';
import glob from 'glob';
import Ajv from 'ajv/dist/2020.js';
import standaloneCode from 'ajv/dist/standalone/index.js';
import addFormats from 'ajv-formats';
import $RefParser from 'json-schema-ref-parser';



async function updateAllDCCSchemaVersions () {

  console.log('START updateAllDCCSchemaVersions()');

  const schemaversions = glob.sync('../../spec/structure/jsonschema/*');

  for (const schemaversion of schemaversions) {

    const version = schemaversion.split('/').pop();
    console.log(version);

    await prepareDCCResources(version);

    await generateDCCValueSchemasFromDCCValueSets(version);
    // await generateDCCValueSchemasFromDCCValueSetAPI(version);

    await adaptDCCValueSetsSchema(version);

    await combineDCCFullSchema(version);

    await compileDCCFullSchema(version);

  }

  console.log('END updateAllDCCSchemaVersions()');

}



async function prepareDCCResources(schemaversion) {

  console.log('START prepareDCCResources()');

  const timestamp = getTimestamp();

  if (fs.existsSync('../../resources-tmp/jsonschema/' + schemaversion)) {

    fs.renameSync('../../resources-tmp/jsonschema/' + schemaversion, '../../resources-tmp/jsonschema/' + schemaversion + '_old_' + timestamp);

  }

  fs.mkdirSync('../../resources-tmp/jsonschema/' + schemaversion);

  // copy structure jsonschema-latest main file

  fs.copyFileSync('../../spec/structure/jsonschema/' + schemaversion + '/DCC.schema.json', '../../resources-tmp/jsonschema/' + schemaversion + '/DCC.schema.json');

  // copy structure jsonschema-latest referenced files

  const files = glob.sync('../../spec/structure/jsonschema/' + schemaversion + '/DCC.*.schema.json');

  for (const file of files) {

    // console.log(file);

    const filename = file.split('/').pop();

    fs.copyFileSync(file, '../../resources-tmp/jsonschema/'+ schemaversion + '/' + filename);

  }

  console.log('END prepareDCCResources()');

}


async function generateDCCValueSchemasFromDCCValueSets (schemaversion) {

  console.log('START generateDCCValueSchemasFromDCCValueSets()');

  const valuesetfiles = glob.sync('../../spec/taxonomy/valuesets-latest/*.json');

  for (const valuesetfile of valuesetfiles) {

    // console.log(valuesetfile);

    const filename = valuesetfile.split('/').pop();
    const filenamewoending = filename.replace('.json', '');

    // console.log(filename)

    const valueset = JSON.parse(fs.readFileSync(valuesetfile, 'utf8'));

    const valueschemadefs = [];

    for (const value in valueset.valueSetValues) {

      if (valueset.valueSetValues.hasOwnProperty(value)) {

        const valueschemadefentry = {
          'const': value,
          /*...valueset.valueSetValues[value]*/ // this makes the full-schema smaller
        };

        valueschemadefs.push(valueschemadefentry);

      }
    }

    const valueschema = {
      '$schema': 'https://json-schema.org/draft/2020-12/schema',
      '$id': 'https://id.uvci.eu/DCC.Values.' + filenamewoending + '.schema.json',
      'title': 'EU DCC',
      'description': 'EU Digital Covid Certificate',
      '$comment': 'PROOF OF CONCEPT - JSON Schema for values',
      'type': 'object',
      '$defs': {
        [filenamewoending]: {
          'type': 'array',
          'title': valueset.valueSetId,
          'items': {
            'type': 'string',
            'oneOf': [
              ...valueschemadefs
            ]
          }
        }
      }
    };

    fs.writeFileSync('../../resources-tmp/jsonschema/' + schemaversion + '/DCC.Values.' + filenamewoending + '.schema.json', JSON.stringify(valueschema, null, 2));

  }

  console.log('END generateDCCValueSchemasFromDCCValueSets()');

}

// TODO
async function generateDCCValueSchemasFromDCCValueSetAPI () {

}


async function adaptDCCValueSetsSchema (schemaversion) {

  console.log('START adaptDCCValueSetsSchema()');

  const valuesetsschema = JSON.parse(fs.readFileSync('../../resources-tmp/jsonschema/' + schemaversion + '/DCC.ValueSets.schema.json', 'utf8'));

  const replacer = function (key, value) {
    if (value && typeof value === 'object') {
      let found = false;
      const replacement = value;
      for (const k in value) {
        if (Object.hasOwnProperty.call(value, k)) {
          if (k === 'valueset-uri') {
            found = true;
            const filenamewoending = value[k].split('/').pop().replace('.json', '');
            replacement['$ref'] = 'https://id.uvci.eu/DCC.Values.' + filenamewoending + '.schema.json#/$defs/' + filenamewoending + '/items';
            delete replacement[k];
          }
        }
      }
      if (found) return replacement;
    }
    return value;
  };

  const valueschemaschema = JSON.stringify(valuesetsschema, replacer, 2);

  // console.log(valueschemaschema)

  fs.writeFileSync('../../resources-tmp/jsonschema/' + schemaversion + '/DCC.ValueSets.schema.json', valueschemaschema);

  console.log('END adaptDCCValueSetsSchema()');

}


async function combineDCCFullSchema (schemaversion) {

  console.log('START combineDCCFullSchema()');

  const mainschema = JSON.parse(fs.readFileSync('../../resources-tmp/jsonschema/' + schemaversion + '/DCC.schema.json', 'utf8'));

  const refresolver = {

    order: 1,
    canRead: true,

    read: function (file) {
      // console.log(file.url);
      const filename = file.url.split('/').pop();
      // console.log('Check file: %s', filename)
      const files = glob.sync('../../resources-tmp/jsonschema/' + schemaversion + '/' + filename);
      // console.log(process.cwd()+"/"+files[0]);
      const path = process.cwd().replace(/\\/g, '/') + '/' + files[0];
      // console.log(path);
      return fs.readFileSync(path);
    }

  };

  try {

    const schema = await $RefParser.dereference(mainschema, {resolve: {file: false, myres: refresolver}});

    fs.writeFileSync('../../resources-tmp/jsonschema/' + schemaversion + '/DCC.Schema.Combined.Full.json', JSON.stringify(schema, null, 2));

  } catch (err) {
    console.error(err);
  }

  console.log('END combineDCCFullSchema()');

}


async function compileDCCFullSchema (schemaversion) {

  console.log('START compileDCCFullSchema()');

  const ajv = new Ajv({strict: true, verbose: true, allErrors: true, code: {source: true, lines: true}});

  addFormats(ajv);

  // compile main schema

  const fullschema = JSON.parse(fs.readFileSync('../../resources-tmp/jsonschema/' + schemaversion + '/DCC.Schema.Combined.Full.json', 'utf8'));

  const validate = ajv.compile(fullschema);

  const moduleCode = standaloneCode.default(ajv, validate);
  fs.writeFileSync('../../resources-tmp/jsonschema/' + schemaversion + '/DCC-JSON-Validator-Standalone.js', moduleCode);

  console.log('END compileDCCFullSchema()');

}


// helpers

function getTimestamp () {

  const now = Date.now();

  const date = new Date(now);

  const day = ('0' + date.getDate()).slice(-2);
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const year = date.getFullYear();

  const hour = ('0' + date.getHours()).slice(-2);
  const minute = ('0' + date.getMinutes()).slice(-2);
  const second = ('0' + date.getSeconds()).slice(-2);

  const timestamp = String(year) + String(month) + String(day) + '_' + String(hour) + String(minute) + String(second);

  return timestamp;

}


// main

(async () => {

  await updateAllDCCSchemaVersions();

})();
