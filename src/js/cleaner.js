import * as fs from 'fs';
import glob from 'glob';


async function cleanDCCTestDataNoJSON () {

  console.log('START cleanDCCTestDataNoJSON()');

  // To delete unused graphics etc
  const unusedfiles = glob.sync('../../data/dcc-testdata-latest/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,md,MD,txt}');

  for (const unusedfile of unusedfiles) {

    fs.unlinkSync(unusedfile);

  }

  console.log('END cleanDCCTestDataNoJSON()');

}


// main

(async () => {

  await cleanDCCTestDataNoJSON();

})();

