const api = require('marvel-api');
const marvel = api.createClient({
  publicKey: '1e2db92a6bcb00833909e51dc61bfce0'
  , privateKey: '452c66dca88cca7fe202f194325edb234849ad8e'
});

module.exports = {
  clickEvent (element) {
    $(element).on('click', event => {
      console.log('eeeeevent',event.currentTarget);
      $(event.currentTarget).hide();

        this.callMarvel('spider-man');
    });
  },
  callMarvel(name) {
    marvel.characters.findByName(name)
    .then((result) => {
      console.log(result);
      const data = result.data[0];
      const name = data.name;
      const description = data.description;
      const path = data.thumbnail.path;
      const ext = data.thumbnail.extension;
    })
    .fail(console.error)
    .done();
  }
};

// const render = require('./render');
// const api = require('marvel-api');
// const marvel = api.createClient({
//   publicKey: '1e2db92a6bcb00833909e51dc61bfce0'
//   , privateKey: '452c66dca88cca7fe202f194325edb234849ad8e'
// });
//
// module.exports = {
//   clickEvent (){
//     $('button').on('click', (event) => {
//       $('button').hide();
//
//       this.callMarvel('spider-man');
//     });
//   },
//   callMarvel(name) {
//     marvel.characters.findByName(name)
//     .then((result) => {
//       this.proxy(result);
//     })
//     .fail(console.error)
//     .done();
//   },
//   proxy (result) {
//     if (result.data.length) {
//       let data = result.data[0];
//       let path = data.thumbnail.path;
//       let ext = data.thumbnail.extension;
//       let name = data.name;
//       let desc = data.description;
//
//       render.renderImage(path, ext, name, desc);
//     } else {
//       throw new Error('Failed!');
//     }
//   }
// };
