const Page = require('./../model/pagesModel.js');
const pagesController = {};

pagesController.getPages = (req, res, next) => {
  let arr = []; 
  console.log("get_pages",res.locals.siteFound._id);
  Page.find({_id:res.locals.siteFound.pageID},(err, pages) => {
    if (err) return console.error(err);
    else{
      console.log("PAGES FOUND",pages)
      res.json(pages);
    }
  }) 
}

pagesController.createPages = (req, res, next) => {
  Page.create({
    title: req.body.page.title,
    url: req.body.page.url,
    desription: req.body.page.desription
  },(err,addedPage) => {
    if (err) res.send(err);
    else{
      res.locals.siteFound.pageID.push((addedPage));
      res.locals.siteFound.save((err,newPage) =>{
        if(err) res.send((err));
        else {
          console.log(newPage);
          res.send("Saved")
        }
      })
    }
  });
}

module.exports = pagesController;
