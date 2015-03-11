/**
 * Song Controller
 */

'use strict';

var Song = require('mongoose').model('song');
var path = require('path');


/**
 * GET /song
 * Read songs data.
 */
var readSongs = function(req, res, next) {
  Song.find(function(err, songs) {
    if (err) {
      return next(err);
    }
    if (!songs) {
      return res.status(400).json({
        errors: [{
          msg: 'No hay canciones'
        }]
      });
    }
    res.status(200).json({
      song: songs
    });
  });
};


var readSongsId = function(req, res, next) {
console.log(req.params);
  Song.findById(req.params.id,function(err, songs) {
    if (err) {
      return next(err);
    }
    if (!songs) {
      return res.status(400).json({
        errors: [{
          msg: 'No hay canciones'
        }]
      });
    }
    res.status(200).json({
      song: songs
    });
 });
};

/**
 * POST /user
 * Create a new local account.
 * @param email
 * @param password
 * @param confirmPassword
 */

var postSong = function(req, res, next) {
    console.log(req.body.nombre);
  // req.assert('email', 'Email is not valid').isEmail();
  // req.assert('password', 'Password must be at least 6 characters long').len(6);
  // req.assert('confirmPassword', 'Passwords do not match').equals(req.body.password);

  // var errors = req.validationErrors();

  // if (errors) {
  //   return res.status(400).json({
  //     errors: errors
  //   });
  // }

  var song = new Song({
    nombre: req.body.nombre,
    cues: req.body.cues
  });

  Song.findOne({ nombre: req.body.nombre }, function(err, existingSong) {
    if (err) {
      return res.send(err);
    }
    if (existingSong) {
      res.status(409).json({
        errors: [{
            msg: 'Ya existe'
        }]
      });
    }

    song.save(function(err) {
      if (err) {
        return next(err);
      }
      // Send user and authentication token
        res.status(200).json({
            song: song,
            success: [{
		msg: 'Song created successfully.'
        }]
      });
    });
  });
};



module.exports = {
  song: readSongs,
  postSong: postSong,
  songId: readSongsId
 };
