const request = require('supertest');

const assert = require('assert');
const path = require('path');

const PORT = process.env.PORT || 3000;
const HOST = `http://localhost:${PORT}`;

describe('/', () => {
  describe('GET', () => {
    it('responds with 200 status and text/html content type', () => {
      request(HOST)
        .get('/')
        .expect('Content-Type', /text\/html/)
        .expect(200)
        .end(function(err, res) {
          if (err) throw err;
        });
    });
  })
})

// app.get('/dashboard', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'));
// })

// app.get('/dashboard/:recordingID', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'));
// })

// app.get('/dashboard/:recordingID/feedback', (req, res) => {
//     res.sendFile(path.join(__dirname, '/index.html'))
// })

// app.get('*/build/bundle.js', (req, res, next) => {
//     res.sendfile('./build/bundle.js');
// })

// app.get('/recordings', recordingController.findAll)
// app.get('/recordings/:recordingID', recordingController.findRecording)

// app.get('/frames/:recordingID',frameController.findFrame)
