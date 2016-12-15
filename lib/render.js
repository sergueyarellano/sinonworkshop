const handler = require('./handler');

module.exports = {
  renderButton(container, innerText) {
    // TODO catch error of element
    const button = document.createElement('button');
    button.innerHTML = innerText;
    $(container).append(button);

    handler.clickEvent(button);
  },
  renderView(container, dataView) {
    // TODO catch error of element
    $(container)
    .append(
      `
      <div id='${dataView.name}' style='width:80%; margin:auto;'>
      <img src='${dataView.path}.${dataView.ext}'
      style='width:50%; display:block; margin:auto;'>
      <hr/>
      <h1>${dataView.name}</h1>
      <p>${dataView.description}</p>
      </div>
      `
    );

    return container;
  }
};




// const handler = require('./handler');
//
// exports.renderFantasticButton = (innerText) => {
//   let button = document.createElement('button');
//   button.innerHTML = innerText;
//   document.body.appendChild(button);
//
//   handler.clickEvent();
// };
//
// exports.renderImage = (path, ext, name, desc) => {
//   $('body')
//   .append(`
    // <div style='width:80%; margin:auto;'>
    // <img src='${path}.${ext}'
    // style='width:50%; display:block; margin:auto;'>
    // <hr/>
    // <h1>${name}</h1>
    // <p>${desc}</p>
    // </div>
//     `);
//   };
