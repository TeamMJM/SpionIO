const Scroll = require('./../Model/scrollModel.js');
const scrollController = {};

scrollController.createScroll = (data) => {
  Scroll.create({
    scrollPercent: data.scrollPercent
  })
  .then((scroll) => {
    return scroll
  })
  .catch((err) => {
    return err;
  })
}

module.exports = scrollController;