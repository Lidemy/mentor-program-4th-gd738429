const request = require('request');

const options = {
  url: 'https://api.twitch.tv/kraken/games/top',
  headers: {
    // eslint-disable-next-line quote-props
    'Accept': 'application/vnd.twitchtv.v5+json',
    'Client-ID': 'wgu6368li8kfcwuc1xmcxzrb857lg0',
  },
};

function callback(error, response, body) {
  if (response.statusCode === 200 && response.statusCode < 300) {
    let json;
    let games;
    try {
      json = JSON.parse(body);
      games = json.top;
    } catch (e) {
      console.log(e);
    }

    for (let i = 0; i < games.length; i += 1) {
      // eslint-disable-next-line no-underscore-dangle
      console.log(`${games[i].game._id} ${games[i].game.name}`);
    }
  } else {
    console.log('格式有誤,請重新輸入');
  }
}

request(options, callback);
