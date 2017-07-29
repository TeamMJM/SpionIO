const Scroll = require('./../Model/scrollModel.js');
const scrollController = {};

scrollController.createScroll = (data) => {
  return Scroll.create({
    scrollPercent: data.scrollPercent
  })
}

module.exports = scrollController;