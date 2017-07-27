const Click = require('./../Model/clickModel.js')
const clickController = {};
const appWidth = 900;
const appHeight = 900;

clickController.mapClick = (req, res, next) => {
    if (req.body.width < appWidth) {
        //scale down width
        req.body.clickx *= appWidth / req.body.width;
    } else {
        //scale up width
        req.body.clickX /= req.body.width / appWidth
    }
    if (req.body.height < appHeight) {
        //scale down height
        req.body.clickY *= appHeight / req.body.height;
    } else {
        //scale up height
        req.body.clickY /= req.body.height / appHeight;
    }
    next();
}

clickController.createClick = (req, res, next) => {
<<<<<<< HEAD
    console.log(req.body)
    let newClick = new Click(req.body);
    newClick.save((err, click) => {
        if (err) return console.error(err);
        res.send(click);
    })
        // .then((click) =>{
        //     console.log(click);
        //     res.send(click);
        // })
        // .catch((err) =>{
        //     res.send(err)
        // })
=======
    Click.create({
            clickX: req.body.clickX,
            clickY: req.body.clickY
        })
        .then((click) => {
            res.send(click);
        })
        .catch((err) => {
            res.send(err)
        })
>>>>>>> 2cb11892332b635d097ae74178528e20f979932c
}
module.exports = clickController;