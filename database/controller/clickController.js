const Click = require('./../Model/clickModel.js')
const clickController = {};
const appWidth = 900;
const appHeight = 900;

clickController.mapClick = (data) => {
    if (data.width < appWidth) {
        //scale down width
        data.clickX *= appWidth / data.width;
    } else {
        //scale up width
        data.clickX /= data.width / appWidth
    }
    if (data.height < appHeight) {
        //scale down height
        data.clickY *= appHeight / data.height;
    } else {
        //scale up height
        data.clickY /= data.height / appHeight;
    }
    return data;
}

clickController.createClick = (data) => {
    return Click.create({
            clickX: data.clickX,
            clickY: data.clickY
        })
}
module.exports = clickController;