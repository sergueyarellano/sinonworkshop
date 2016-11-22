exports.renderFantasticButton = (innerText) => {
  let button = document.createElement('button');
  button.innerHTML = innerText;
  $('body').append(button);
  $('button').on('click', (event) => {
    $('button').hide();
    require('./marvelapicalls').getSuperHero('spider-man');
  });
};

exports.deferred = (deferred) => {
  deferred.then(function(result) {
    let data = result.data[0];
    let path = data.thumbnail.path;
    let ext = data.thumbnail.extension;
    let name = data.name;
    let desc = data.description;

    require('./marvelrender').renderImage(path, ext, name, desc);
  })
  .fail(console.error)
  .done();
};

exports.renderImage = (path, ext, name, desc) => {
  $('body')
  .append(`
    <div style='width:80%; margin:auto;'>
    <img src='${path}.${ext}'
    style='width:50%; display:block; margin:auto;'>
    <hr/>
    <h1>${name}</h1>
    <p>${desc}</p>
    </div>
    `);
  };
