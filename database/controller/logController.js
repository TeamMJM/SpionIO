const Log = require('./../model/logModel.js')
const LogController = {};

LogController.createLog= (data) =>{
  return Log.create(data)
}

LogController.updateLog = (id,data) =>{
  return Log.findByIdAndUpdate(id,{$push:data})
}

LogController.findLog = (req, res, next) => {
  Log.findOne({_id:req.params.recordingID},(err, response) => {
      if (err) res.send(err)
      else {
          res.send(response);
      }
  })
}

LogController.findAll = (req, res, next) => {
  Log.find((err, response) => {
      if (err) res.send(err)
      else res.send(response);
  })
}

LogController.deleteLog= (id) => {
  return Log.findByIdAndRemove(id)
}


module.exports = LogController;