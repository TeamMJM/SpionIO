const Recording = require('./../model/recordingModel.js')
const recordingController = {};


recordingController.createRecording = (data) => {
    return Recording.create(data)
};

recordingController.findRecording = (req, res, next) => {
    Recording.findOneById(res.params.recordingID,(err, response) => {
        if (err) res.send(err)
        else res.send(response);
    })
}

recordingController.findAll = (req, res, next) => {
    Recording.find((err, response) => {
        if (err) res.send(err)
        else res.send(response);
    })
}

recordingController.updateRecording = (id, Data) => {
    return Recording.findByIdAndUpdate(id, {
        $push: Data
    });
}

recordingController.deleteRecording = (id) => {
    return Recording.findByIdAndRemove(id)
}


module.exports = recordingController;