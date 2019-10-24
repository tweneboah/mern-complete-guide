const express = require('express');
const Video = require('../models/Video')
const router = express.Router();

router.post('/videos', (req, res) => {

 let video = new Video(req.body)
  video.save()
  .then((video) => {
      res.status(200).json(video)
   })
    
});


router.get('/videos', (req, res) => {
    Video.find({})
    .then((video) => {
        res.json(video)
    })
})

module.exports = router;