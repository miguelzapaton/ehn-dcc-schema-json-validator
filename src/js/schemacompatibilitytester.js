import * as fs from 'fs';
import glob from 'glob';
import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';

const schemacompatibilitytestmap = new Map(
  [
      ['1', ['1.2.1','1.3.0-spec']]
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


async function schemaCompatibilityTestDCCTestDataJSON() {

  console.log('START schemaCompatibilityTestDCCTestDataJSON()');

  const ajvcachemap = new Map();

  const timestamp = getTimestamp();

  fs.mkdirSync('../../log/dcc-testdata-latest/schemacompatibilitytest_run_' + timestamp);

  const log = fs.createWriteStream('../../log/dcc-testdata-latest/schemacompatibilitytest_run_' + timestamp + '/schemacompatibilitytest_run_' + timestamp + '.log', {flags: 'a'});

  console.log('Schema versions tested: ');
  log.write('Schema versions tested: ');

  const schemacompatibilitytestmapentries = Object.fromEntries(schemacompatibilitytestmap);
  console.log(JSON.stringify(schemacompatibilitytestmapentries)+'\n');
  log.write(JSON.stringify(schemacompatibilitytestmapentries)+'\n');

  const files = glob.sync('../../data/dcc-testdata-latest/**/*.json');

  for (const file of files) {

    const countrycode = file.match('../../data/dcc-testdata-latest/([A-Za-z]+)/')[1];

    let dcc;

    try {

      dcc = JSON.parse(fs.readFileSync(file, 'utf8'));

    } catch (error) {

      console.log(file);
      log.write(file + '\n');
      fs.appendFileSync('../../log/dcc-testdata-latest/schemacompatibilitytest_run_' + timestamp + '/schemacompatibilitytest_run_' + countrycode + '_' + timestamp + '.log', file + '\n');

      console.log('JSON PARSE ERROR' + error);
      log.write('JSON PARSE ERROR\n' + error + '\n');
      fs.appendFileSync('../../log/dcc-testdata-latest/schemacompatibilitytest_run_' + timestamp + '/schemacompatibilitytest_run_' + countrycode + '_' + timestamp + '.log', 'JSON PARSE ERROR\n' + error + '\n');

      continue;

    }

    if (dcc != null && dcc.JSON != null && dcc.JSON.ver != null && dcc.JSON.ver.length > 0) {

      const version = dcc.JSON.ver;

      const testschemaversions = schemacompatibilitytestmap.get(version.substr(0,1));

      if (testschemaversions != null && testschemaversions.length > 0) {

        const testvalidresult = [];

        for (const testschemaversion of testschemaversions) {

          let validate;

          if (ajvcachemap.has(testschemaversion)) {

            validate = ajvcachemap.get(testschemaversion);

          } else {

            const ajv = new Ajv({strict: true, verbose: false, allErrors: true});
            addFormats(ajv);
            const fullschema = JSON.parse(fs.readFileSync('../../resources-tmp/jsonschema/' + testschemaversion + '/DCC.Schema.Combined.Full.json', 'utf8'));
            validate = ajv.compile(fullschema);

            ajvcachemap.set(testschemaversion, validate);

          }

          const valid = validate(dcc.JSON);

          testvalidresult.push(valid);

        }

        if (!(testvalidresult.every(i => i) || testvalidresult.every(i => !i))) {

          console.log(file + ' (Schema version tag: ' + version + ')');
          log.write(file + ' (Schema version tag: ' + version + ')\n');
          fs.appendFileSync('../../log/dcc-testdata-latest/schemacompatibilitytest_run_' + timestamp + '/schemacompatibilitytest_run_' + countrycode + '_' + timestamp + '.log', file + ' (Schema version tag: ' + version + ')\n');

          console.log(JSON.stringify(testschemaversions) + ' valid: ' + JSON.stringify(testvalidresult));
          log.write(JSON.stringify(testschemaversions) + ' valid: ' + JSON.stringify(testvalidresult) + '\n');
          fs.appendFileSync('../../log/dcc-testdata-latest/schemacompatibilitytest_run_' + timestamp + '/schemacompatibilitytest_run_' + countrycode + '_' + timestamp + '.log', JSON.stringify(testschemaversions) + ' valid: ' + JSON.stringify(testvalidresult) + '\n');

        }

      }

    }

  }

  console.log('Schema compatibility tested ' + files.length + ' DCC JSON files.');

  log.end('Schema compatibility tested ' + files.length + ' DCC JSON files.');

  console.log('END schemaCompatibilityTestDCCTestDataJSON()');

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

  await schemaCompatibilityTestDCCTestDataJSON();

})();

