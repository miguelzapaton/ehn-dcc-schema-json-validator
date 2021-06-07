

async function testParseDate () {

  console.log('START testParseDate()');

  const date = new Date('2012-12');

  console.log('2012-12 -> ' + date.toISOString());

  const date2 = new Date('2012');

  console.log('2012 -> ' + date2.toISOString());

  try {

    const date3 = new Date('2012-00');
    // parse OK - JS...

    console.log('2012-00 -> ' + date3.toISOString());
    // error thrown here!?

  } catch (error) {

    console.log(error);

  }



  console.log('END testParseDate()');

}


// main

(async () => {

  await testParseDate();

})();

