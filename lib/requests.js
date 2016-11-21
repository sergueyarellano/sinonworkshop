const request = require('request')

module.exports = request.get('http://gateway.marvel.com/v1/public/comics')
