const Recording = require('./../model/recordingModel.js')
const recordingController = {};


recordingController.createRecording = (data) => {
    return Recording.create(data)
};

recordingController.findRecording = (id) => {
    return Recording.findById(id)
}

recordingController.findAll = () =>{
    return Recording.find()
}

recordingController.updateRecording = (id,Data) => {
    return Recording.findByIdAndUpdate(id, {
        $push: Data
    });
}

recordingController.deleteRecording = (id) =>{
    return Recording.findByIdAndRemove(id)
}


module.exports = recordingController;