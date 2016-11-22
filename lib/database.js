module.exports = {
  getUserInfo (userName) {
    return {};
  },
  getUsers () {
    return [];
  },
  getManOfTheDay () {
    return this.getUserInfo('Charles');
  }
};
