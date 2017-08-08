const Page = require('./../model/pagesModel.js');
const Sites = require('./../model/sitesModel.js');
const pagesController = {};

pagesController.getPages = (req, res, next) => {
  let arr = [];
  console.log("get_pages", res.locals.siteFound._id);
  Page.find({
    _id: res.locals.siteFound.pageID
  }, (err, pages) => {
    if (err) return console.error(err);
    else {
      console.log("PAGES FOUND", pages)
      res.json(pages);
    }
  })
}

pagesController.createPages = (req, res, next) => {
  Page.create({
    title: req.body.page.title,
    url: req.body.page.url,
    desription: req.body.page.desription
  }, (err, addedPage) => {
    if (err) res.send(err);
    else {
      res.locals.siteFound.pageID.push((addedPage));
      res.locals.siteFound.save((err, newPage) => {
        if (err) res.send((err));
        else {
          res.send("Saved")
        }
      })
    }
  });
}

pagesController.getSinglePages = (req, res, next) => {
  res.locals.siteFound.pageID.forEach(function(element) {
    if(element == req.body.pageID){
      Page.findOne({_id:element},(err,foundPage) =>{
        if(err) res.send(err)
        else{
          console.log("FOUND",foundPage)
          res.send(foundPage)
        }
      })
    }
  });
}

module.exports = pagesController;