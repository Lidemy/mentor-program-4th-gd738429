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
  if (!error && response.statusCode === 200) {
    const json = JSON.parse(body);
    const games = json.top;
    for (let i = 0; i < games.length; i += 1) {
      // eslint-disable-next-line no-underscore-dangle
      console.log(`${games[i].game._id} ${games[i].game.name}`);
    }
  }
}

request(options, callback);
