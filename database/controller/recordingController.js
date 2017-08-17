const Recording = require('./../model/recordingModel.js')
const recordingController = {};


recordingController.createRecording = (data) => {
    return Recording.create(data)
};

recordingController.findRecording = (req, res, next) => {
    Recording.findOne({_id:req.params.recordingID},(err, response) => {
        if (err) res.send(err)
        else {
            res.send(response);
        }
    })
}

recordingController.findAll = (req, res, next) => {
    Recording.find((err, response) => {
        if (err) res.send(err)
        else res.send(response);
    })
}

recordingController.deleteRecording = (req, res, next) => {
    return Recording.findByIdAndRemove(req.body._id)
}


module.exports = recordingController;
