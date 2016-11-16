module.exports = {
  stringCompressor (input) {
    return this.stringCompressorAux(input, 0, 1)
  },
  stringCompressorAux: function stringCompressorAux (input, position, acc) {
    return position > input.length - 1
    ? ''
    : input.charAt(position) === input.charAt(position + 1)
      ? stringCompressorAux(input, position + 1, acc + 1)
      : input.charAt(position) + (acc !== 1 ? acc : '') +
      stringCompressorAux(input, position + 1, 1)
  }
}
