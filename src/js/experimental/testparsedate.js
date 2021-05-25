

async function testParseDate () {

  console.log('START testParseDate()');

  const date = new Date('2012-12');

  console.log('2012-12 -> ' + date.toISOString());

  const date2 = new Date('2012');

  console.log('2012 -> ' + date2.toISOString());

  console.log('END testParseDate()');

}


// main

(async () => {

  await testParseDate();

})();

