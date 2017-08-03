const Site = require('./../model/sitesModel.js');
const Page = require('./../model/pagesModel.js');
const sitesController = {};
const pageController = require('./pagesController.js')
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

sitesController.findSite = (req,res,next) =>{
  Site.findOne({_id:req.body.siteID},(err,siteFound) =>{
    if(err) return res.send(err);
    else{
      res.locals.siteFound = siteFound
      next()
    }
  });
}



module.exports = sitesController;

