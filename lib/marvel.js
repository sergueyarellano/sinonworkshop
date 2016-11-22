const api = require('marvel-api');
const marvel = api.createClient({
  publicKey: '1e2db92a6bcb00833909e51dc61bfce0'
  , privateKey: '452c66dca88cca7fe202f194325edb234849ad8e'
});

exports.getSuperHero = (name) => {
  marvel.characters.findByName(name)
  .then((result) => {
    let data = result.data[0];
    let path = data.thumbnail.path;
    let ext = data.thumbnail.extension;
    let name = data.name;
    let desc = data.description;

    require('./render').renderImage(path, ext, name, desc);

  })
  .fail(console.error)
  .done();
};
