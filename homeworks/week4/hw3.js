const request = require('request');
const process = require('process');

const input1 = process.argv[2];

request(
  `https://restcountries.eu/rest/v2/name/${input1}`,
  (err, response, body) => {
    let json;
    try {
      json = JSON.parse(body);
    } catch (e) {
      console.log(e);
    }
    for (let i = 0; i < json.length; i += 1) {
      console.log(
        `============
國家：${json[i].name}
首都：${json[i].capital}
貨幣：${json[i].currencies.code}
國碼：${json[i].callingCodes[0]}`,
      );
    }
  },
);
