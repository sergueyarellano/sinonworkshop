exports.renderFantasticButton = (innerText) => {
  let button = document.createElement('button');
  button.innerHTML = innerText;
  $('body').append(button);
  $('button').on('click', (event) => {
    $('button').hide();
    require('./marvel').getSuperHero('spider-man');
  });
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
