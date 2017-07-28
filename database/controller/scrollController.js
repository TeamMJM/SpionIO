const Scroll = require('./../model/scrollModel.js');
const scrollController = {};

scrollController.createScroll = (req, res) => {
  Scroll.create({
    scrollPercent: req.body.scrollPercent
  })
  .then((scroll) => {
    res.send(scroll);
  })
  .catch((err) => {
    res.send(err);
  })
}

module.exports = scrollController;