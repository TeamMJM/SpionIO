const Frame = require('./../model/frameModel.js')
const frameController = {};


frameController.createFrame = (data) => {
    return Frame.create(data)
};

frameController.findFrame = (req, res, next) => {
    Frame.findOne({_id:req.params.recordingID},(err, response) => {
        if (err) res.send(err)
        else {
            res.send(response);
        }
    })
}

frameController.findAll = (req, res, next) => {
    Frame.find((err, response) => {
        if (err) res.send(err)
        else res.send(response);
    })
}

frameController.updateFrameBulk = (id, Data) => {
    let bulk = Frame.collection.initializeOrderedBulkOp();
    Data.forEach(function(element) {
        bulk.find({'_id':id}).update({$push:element})        
    });
    return bulk.execute()
}

frameController.deleteFrame = (id) => {
    return Frame.findByIdAndRemove(id)
}


module.exports = frameController;
