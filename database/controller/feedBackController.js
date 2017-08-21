const FeedBack = require('./../model/feedBackModel.js')
const feedBackController = {};

feedBackController.createfeedBack = (data) =>{
  return FeedBack.create(data)
}

feedBackController.findRecording = (req, res, next) => {
  FeedBack.findOne({_id:req.params.recordingID},(err, response) => {
      if (err) res.send(err)
      else {
          res.send(response);
      }
  })
}

feedBackController.findAll = (req, res, next) => {
  FeedBack.find((err, response) => {
      if (err) res.send(err)
      else res.send(response);
  })
}

feedBackController.updateFeedBack = (id,data) =>{
  return FeedBack.findByIdAndUpdate(id,data)
}

feedBackController.deleteRecording = (req,res,next) => {
  return FeedBack.findByIdAndRemove(req.body._id)
}

module.exports = feedBackController;