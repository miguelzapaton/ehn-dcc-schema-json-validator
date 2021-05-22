import * as fs from 'fs';
import glob from 'glob';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const latestschemarevisionmap = new Map(
  [
      ['1', '1.0.1']
    ]
);


async function compileAllDGCFullSchemas () {

  console.log('START compileAllDGCFullSchemas()');

  const schemaversions = glob.sync('../../spec/structure/jsonschema/*');

  for (const schemaversion of schemaversions) {

    const version = schemaversion.split('/').pop();
    console.log(version);

    const fullschema = JSON.parse(fs.readFileSync('../../resources-tmp/jsonschema/' + version + '/DGC.Schema.Combined.Full.json', 'utf8'));

    // As schema's semantic version is not part of the $id of the schema, different Ajv instances needed
    const ajv = new Ajv({strict: true, verbose: true, allErrors: true, code: {source: true, lines: true}});

    addFormats(ajv);

    ajv.compile(fullschema);

  }

  console.log('END compileAllDGCFullSchemas()');

}


async function validateDGCTestDataJSON () {

  console.log('START validateDGCTestDataJSON()');

  const ajvcachemap = new Map();

  const timestamp = getTimestamp();

  fs.mkdirSync('../../test/dgc-testdata-latest/validation_run_' + timestamp);

  const log = fs.createWriteStream('../../test/dgc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + timestamp + '.log', {flags: 'a'});

  const files = glob.sync('../../data/dgc-testdata-latest/**/*.json');

  for (const file of files) {

    const countrycode = file.match('../../data/dgc-testdata-latest/([A-Za-z]+)/')[1];

    let dgc;

    try {

      dgc = JSON.parse(fs.readFileSync(file, 'utf8'));

    } catch (error) {

      console.log(file);
      log.write(file + '\n');
      fs.appendFileSync('../../test/dgc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + countrycode + '_' + timestamp + '.log', file + '\n');

      console.log('JSON PARSE ERROR' + error);
      log.write('JSON PARSE ERROR\n' + error + '\n');
      fs.appendFileSync('../../test/dgc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + countrycode + '_' + timestamp + '.log', 'JSON PARSE ERROR\n' + error + '\n');

      continue;

    }

    if (dgc != null && dgc.JSON != null && dgc.JSON.ver != null && dgc.JSON.ver.length > 0) {

      const version = dgc.JSON.ver;

      const latestschemaversion = latestschemarevisionmap.get(version.substr(0,1));

      if (latestschemaversion != null) {

        let validate;

        if (ajvcachemap.has(latestschemaversion)) {

          validate = ajvcachemap.get(latestschemaversion);

        } else {

          const ajv = new Ajv({strict: true, verbose: false, allErrors: true});
          addFormats(ajv);
          const fullschema = JSON.parse(fs.readFileSync('../../resources-tmp/jsonschema/' + latestschemaversion + '/DGC.Schema.Combined.Full.json', 'utf8'));
          validate = ajv.compile(fullschema);

          ajvcachemap.set(latestschemaversion, validate);

        }

        const valid = validate(dgc.JSON);
        if (!valid) {

          console.log(file + ' (Schema version: ' + version + ' - validated with: ' + latestschemaversion + ')');
          log.write(file + ' (Schema version: ' + version + ' - validated with: ' + latestschemaversion + ')\n');
          fs.appendFileSync('../../test/dgc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + countrycode + '_' + timestamp + '.log', file + ' (Schema version: ' + version + ' - validated with: ' + latestschemaversion + ')\n');

          console.log('VALIDATION ERRORS FOUND:');
          log.write('VALIDATION ERRORS FOUND:\n');
          fs.appendFileSync('../../test/dgc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + countrycode + '_' + timestamp + '.log', 'VALIDATION ERRORS FOUND:\n');

          const dgcjsonstr = JSON.stringify(dgc.JSON, null, 2) + '\n';
          console.log(dgcjsonstr);
          log.write(dgcjsonstr);
          fs.appendFileSync('../../test/dgc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + countrycode + '_' + timestamp + '.log', dgcjsonstr);

          const errstr = JSON.stringify(validate.errors, null, 2) + '\n';
          console.log(errstr);
          log.write(errstr);
          fs.appendFileSync('../../test/dgc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + countrycode + '_' + timestamp + '.log', errstr);

        } else {

          console.log(file + ' (Schema version: ' + version + ' - validated with: ' + latestschemaversion + ')');
          log.write(file + ' (Schema version: ' + version + ' - validated with: ' + latestschemaversion + ')\n');

          console.log('OK');
          log.write('OK' + '\n');

        }

      }

    }

  }

  console.log('Validated ' + files.length + ' DGC JSON files.');

  log.end('Validated ' + files.length + ' DGC JSON files.');

  console.log('END validateDGCTestDataJSON()');

}


async function validateDGCExampleDataJSON () {

  console.log('START validateDGCExampleDataJSON()');

  const ajvcachemap = new Map();

  const timestamp = getTimestamp();

  fs.mkdirSync('../../test/examples-latest/validation_run_' + timestamp);

  const log = fs.createWriteStream('../../test/examples-latest/validation_run_' + timestamp + '/validation_run_' + timestamp + '.log', {flags: 'a'});

  const files = glob.sync('../../data/examples-latest/**/*.json');

  for (const file of files) {

    let dgc;

    try {

      dgc = JSON.parse(fs.readFileSync(file, 'utf8'));

    } catch (error) {

      console.log(file);
      log.write(file + '\n');

      console.log('JSON PARSE ERROR' + error);
      log.write('JSON PARSE ERROR\n' + error + '\n');

      continue;

    }

    if (dgc != null && dgc.ver != null && dgc.ver.length > 0) {

      const version = dgc.ver;

      const latestschemaversion = latestschemarevisionmap.get(version.substr(0,1));

      if (latestschemaversion != null) {

        let validate;

        if (ajvcachemap.has(latestschemaversion)) {

          validate = ajvcachemap.get(latestschemaversion);

        } else {

          const ajv = new Ajv({strict: true, verbose: false, allErrors: true});
          addFormats(ajv);
          const fullschema = JSON.parse(fs.readFileSync('../../resources-tmp/jsonschema/' + latestschemaversion + '/DGC.Schema.Combined.Full.json', 'utf8'));
          validate = ajv.compile(fullschema);

          ajvcachemap.set(latestschemaversion, validate);

        }

        const valid = validate(dgc);
        if (!valid) {

          console.log(file + ' (Schema version: ' + version + ' - validated with: ' + latestschemaversion + ')');
          log.write(file + ' (Schema version: ' + version + ' - validated with: ' + latestschemaversion + ')\n');

          console.log('ERRORS FOUND:');
          log.write('ERRORS FOUND:\n');

          const dgcjsonstr = JSON.stringify(dgc, null, 2) + '\n';
          console.log(dgcjsonstr);
          log.write(dgcjsonstr);

          const errstr = JSON.stringify(validate.errors, null, 2) + '\n';
          console.log(errstr);
          log.write(errstr);

        } else {

          console.log(file + ' (Schema version: ' + version + ' - validated with: ' + latestschemaversion + ')');
          log.write(file + ' (Schema version: ' + version + ' - validated with: ' + latestschemaversion + ')\n');

          console.log('OK');
          log.write('OK' + '\n');

        }

      }

    }

  }

  console.log('Validated ' + files.length + ' DGC JSON example files.');

  log.end('Validated ' + files.length + ' DGC JSON example files.');

  console.log('END validateDGCExampleDataJSON()');

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

  await compileAllDGCFullSchemas();

  await validateDGCTestDataJSON();

  await validateDGCExampleDataJSON();

})();

