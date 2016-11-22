const api = require('marvel-api');
const marvel = api.createClient({
  publicKey: '1e2db92a6bcb00833909e51dc61bfce0'
  , privateKey: '452c66dca88cca7fe202f194325edb234849ad8e'
});

module.exports = function(name) {
  marvel.characters.findByName(name)
  .then(function(result) {
    const data = result.data[0];
    const path = data.thumbnail.path;
    const ext = data.thumbnail.extension;
    const name = data.name;
    const desc = data.description;
    console.log(result.data[0]);
    $('body')
    .append(`
      <div style='width:80%; margin:auto;'>
      <img src='${path}.${ext}'
      style='width:50%; display:block; margin:auto;'>
      <h1>${name}</h1>
      <p>${desc}</p>
      </div>
      `);
    })
    .fail(console.error)
    .done();
  };
