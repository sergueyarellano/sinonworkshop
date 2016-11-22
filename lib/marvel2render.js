exports.renderButton = () => {
  let button = document.createElement('button');
  button.setAttribute('data-id', 'myButton');
  $('body').append(button);
};
