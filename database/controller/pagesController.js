const Page = require('./../model/pagesModel.js');
const pagesController = {};

pagesController.getPages = (req, res, next) => {
  Page.find((err, page) => {
    if (err) return console.error(err);
    res.json(page);
  })
}

pagesController.createPages = (req, res, next) => {
  const newPage = Page({
    title: req.body.title,
    url: req.body.url,
    desription: req.body.desription
  });
  Page.create(newPage,err => {
    if (err) res.send(err);
    res.send('Page successfully added!')
  })
}

module.exports = pagesController;