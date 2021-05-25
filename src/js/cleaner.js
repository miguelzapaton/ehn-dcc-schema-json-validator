import * as fs from 'fs';
import glob from 'glob';


async function cleanDGCTestDataNoJSON () {

  console.log('START cleanDGCTestDataNoJSON()');

  // To delete unused graphics etc
  const unusedfiles = glob.sync('../../data/dgc-testdata-latest/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,md,MD,txt}');

  for (const unusedfile of unusedfiles) {

    fs.unlinkSync(unusedfile);

  }

  console.log('END cleanDGCTestDataNoJSON()');

}


// main

(async () => {

  await cleanDGCTestDataNoJSON();

})();

