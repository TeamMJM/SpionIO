const Page = require('./../model/pagesModel.js');
const pagesController = {};

pagesController.getPages = (req, res, next) => {
  Page.find((err, page) => {
    if (err) return console.error(err);
    res.json(page);
  })
}

pagesController.createPages = (req, res, next) => {
  const page = new Page();
  page.title = req.body.title;
  page.save(err => {
    if (err) res.send(err);
    res.json({ Message: 'Page successfully added!'})
  })
}

module.exports = pagesController;