import * as fs from 'fs';
import glob from 'glob';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const latestschemarevisionmap = new Map(
  [
      ['1', '1.3.0-spec']
    ]
);


async function compileAllDCCFullSchemas () {

  console.log('START compileAllDCCFullSchemas()');

  const schemaversions = glob.sync('../../spec/structure/jsonschema/*');

  for (const schemaversion of schemaversions) {

    const version = schemaversion.split('/').pop();
    console.log(version);

    const fullschema = JSON.parse(fs.readFileSync('../../resources-tmp/jsonschema/' + version + '/DCC.Schema.Combined.Full.json', 'utf8'));

    // As schema's semantic version is not part of the $id of the schema, different Ajv instances needed
    const ajv = new Ajv({strict: true, verbose: true, allErrors: true, code: {source: true, lines: true}});

    addFormats(ajv);

    ajv.compile(fullschema);

  }

  console.log('END compileAllDCCFullSchemas()');

}


async function validateDCCTestDataJSON () {

  console.log('START validateDCCTestDataJSON()');

  const ajvcachemap = new Map();

  const timestamp = getTimestamp();

  fs.mkdirSync('../../log/dcc-testdata-latest/validation_run_' + timestamp);

  const log = fs.createWriteStream('../../log/dcc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + timestamp + '.log', {flags: 'a'});

  console.log('Latest schema versions used: ');
  log.write('Latest schema versions used: ');

  const latestschemarevisionmapentries = Object.fromEntries(latestschemarevisionmap);
  console.log(JSON.stringify(latestschemarevisionmapentries)+'\n');
  log.write(JSON.stringify(latestschemarevisionmapentries)+'\n');

  const files = glob.sync('../../data/dcc-testdata-latest/**/*.json');

  for (const file of files) {

    const countrycode = file.match('../../data/dcc-testdata-latest/([A-Za-z]+)/')[1];

    let dcc;

    try {

      dcc = JSON.parse(fs.readFileSync(file, 'utf8'));

    } catch (error) {

      console.log(file);
      log.write(file + '\n');
      fs.appendFileSync('../../log/dcc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + countrycode + '_' + timestamp + '.log', file + '\n');

      console.log('JSON PARSE ERROR' + error);
      log.write('JSON PARSE ERROR\n' + error + '\n');
      fs.appendFileSync('../../log/dcc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + countrycode + '_' + timestamp + '.log', 'JSON PARSE ERROR\n' + error + '\n');

      continue;

    }

    if (dcc != null && dcc.JSON != null && dcc.JSON.ver != null && dcc.JSON.ver.length > 0) {

      const version = dcc.JSON.ver;

      const latestschemaversion = latestschemarevisionmap.get(version.substr(0,1));

      if (latestschemaversion != null) {

        let validate;

        if (ajvcachemap.has(latestschemaversion)) {

          validate = ajvcachemap.get(latestschemaversion);

        } else {

          const ajv = new Ajv({strict: true, verbose: false, allErrors: true});
          addFormats(ajv);
          const fullschema = JSON.parse(fs.readFileSync('../../resources-tmp/jsonschema/' + latestschemaversion + '/DCC.Schema.Combined.Full.json', 'utf8'));
          validate = ajv.compile(fullschema);

          ajvcachemap.set(latestschemaversion, validate);

        }

        const valid = validate(dcc.JSON);
        if (!valid) {

          console.log(file + ' (Schema version tag: ' + version + ')');
          log.write(file + ' (Schema version tag: ' + version + ')\n');
          fs.appendFileSync('../../log/dcc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + countrycode + '_' + timestamp + '.log', file + ' (Schema version tag: ' + version + ')\n');

          console.log('VALIDATION ERRORS FOUND:');
          log.write('VALIDATION ERRORS FOUND:\n');
          fs.appendFileSync('../../log/dcc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + countrycode + '_' + timestamp + '.log', 'VALIDATION ERRORS FOUND:\n');

          const dccjsonstr = JSON.stringify(dcc.JSON, null, 2) + '\n';
          console.log(dccjsonstr);
          log.write(dccjsonstr);
          fs.appendFileSync('../../log/dcc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + countrycode + '_' + timestamp + '.log', dccjsonstr);

          const errstr = JSON.stringify(validate.errors, null, 2) + '\n';
          console.log(errstr);
          log.write(errstr);
          fs.appendFileSync('../../log/dcc-testdata-latest/validation_run_' + timestamp + '/validation_run_' + countrycode + '_' + timestamp + '.log', errstr);

        } else {

          console.log(file + ' (Schema version tag: ' + version + ')');
          log.write(file + ' (Schema version tag: ' + version + ')\n');

          console.log('OK');
          log.write('OK' + '\n');

        }

      }

    }

  }

  console.log('Validated ' + files.length + ' DCC JSON files.');

  log.end('Validated ' + files.length + ' DCC JSON files.');

  console.log('END validateDCCTestDataJSON()');

}


async function validateDCCExampleDataJSON () {

  console.log('START validateDCCExampleDataJSON()');

  const ajvcachemap = new Map();

  const timestamp = getTimestamp();

  fs.mkdirSync('../../log/examples-latest/validation_run_' + timestamp);

  const log = fs.createWriteStream('../../log/examples-latest/validation_run_' + timestamp + '/validation_run_' + timestamp + '.log', {flags: 'a'});

  console.log('Latest schema versions used: ');
  log.write('Latest schema versions used: ');

  const latestschemarevisionmapentries = Object.fromEntries(latestschemarevisionmap);
  console.log(JSON.stringify(latestschemarevisionmapentries)+'\n');
  log.write(JSON.stringify(latestschemarevisionmapentries)+'\n');

  const files = glob.sync('../../data/examples-latest/**/*.json');

  for (const file of files) {

    let dcc;

    try {

      dcc = JSON.parse(fs.readFileSync(file, 'utf8'));

    } catch (error) {

      console.log(file);
      log.write(file + '\n');

      console.log('JSON PARSE ERROR' + error);
      log.write('JSON PARSE ERROR\n' + error + '\n');

      continue;

    }

    if (dcc != null && dcc.ver != null && dcc.ver.length > 0) {

      const version = dcc.ver;

      const latestschemaversion = latestschemarevisionmap.get(version.substr(0,1));

      if (latestschemaversion != null) {

        let validate;

        if (ajvcachemap.has(latestschemaversion)) {

          validate = ajvcachemap.get(latestschemaversion);

        } else {

          const ajv = new Ajv({strict: true, verbose: false, allErrors: true});
          addFormats(ajv);
          const fullschema = JSON.parse(fs.readFileSync('../../resources-tmp/jsonschema/' + latestschemaversion + '/DCC.Schema.Combined.Full.json', 'utf8'));
          validate = ajv.compile(fullschema);

          ajvcachemap.set(latestschemaversion, validate);

        }

        const valid = validate(dcc);
        if (!valid) {

          console.log(file + ' (Schema version tag: ' + version + ')');
          log.write(file + ' (Schema version tag: ' + version + ')\n');

          console.log('ERRORS FOUND:');
          log.write('ERRORS FOUND:\n');

          const dccjsonstr = JSON.stringify(dcc, null, 2) + '\n';
          console.log(dccjsonstr);
          log.write(dccjsonstr);

          const errstr = JSON.stringify(validate.errors, null, 2) + '\n';
          console.log(errstr);
          log.write(errstr);

        } else {

          console.log(file + ' (Schema version tag: ' + version + ')');
          log.write(file + ' (Schema version tag: ' + version + ')\n');

          console.log('OK');
          log.write('OK' + '\n');

        }

      }

    }

  }

  console.log('Validated ' + files.length + ' DCC JSON example files.');

  log.end('Validated ' + files.length + ' DCC JSON example files.');

  console.log('END validateDCCExampleDataJSON()');

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

  await compileAllDCCFullSchemas();

  await validateDCCTestDataJSON();

  await validateDCCExampleDataJSON();

})();

