const api = require('marvel-api');
const marvel = api.createClient({
  publicKey: '1e2db92a6bcb00833909e51dc61bfce0'
  , privateKey: '452c66dca88cca7fe202f194325edb234849ad8e'
});

exports.getSuperHero = (name) => {
  return marvel.characters.findByName(name);
};
