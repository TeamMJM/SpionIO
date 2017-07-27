const Click = require('./../Model/clickModel.js')
const clickController = {};

clickController.createClick = (req, res, next) => {
    console.log(req.body)
    let newClick = new Click(req.body);
    newClick.save()
        .then((click) =>{
            console.log(click);
            res.send(click);
        })
        .catch((err) =>{
            res.send(err)
        })
}
module.exports = clickController;