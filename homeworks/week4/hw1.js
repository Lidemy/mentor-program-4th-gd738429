const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (err, res, body) => {
    let json;
    try {
      json = JSON.parse(body);
    } catch (e) {
      console.log(e);
    }

    for (let i = 0; i < json.length; i += 1) {
      console.log(`${json[i].id} ${json[i].name}`);
    }
  },
);
