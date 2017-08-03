const Site = require('./../Model/sitesModel.js');
const sitesController = {};

sitesController.getSites = (req, res, next) => {
  Site.find((err, site) => {
    if (err) res.send(err);
    res.json(site);
  })
}

sitesController.createSites = (req, res, next) => {
  const site = new Site();
  site.title = req.body.title;
  site.save(err => {
    if (err) res.send(err);
    res.json({ Message: 'Site successfully added!'})
  })
}

module.exports = sitesController;