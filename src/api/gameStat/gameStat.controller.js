var mongoose = require('mongoose'),
    Gamestat = mongoose.model('gameStat');

/* POST /api/gameStat */
exports.create = function (req, res) {
  var gameStat = new Gamestat(req.body);
  gameStat.save(function (err) {
    if (err) {
      res.send(400, err);
    } else {
      res.send(gameStat);
    }
  });
};

/* GET /api/gameStat */
exports.read = function (req, res) {
  Gamestat.findById(req.params.id, function (err, gameStat) {
    if (err) {
      res.send(400, err);
    } else if (!gameStat) {
      res.send(404);
    } else {
      res.send(gameStat);
    }
  });
};

/* PUT /api/gameStat/:id */
exports.update = function (req, res) {
  var id = req.params.id,
      data = req.body;

  delete data._id; // Just in case...

  Gamestat.findByIdAndUpdate(id, data, function (err) {
    if (err) {
      res.send(400, err);
    } else {
      res.send({success: true, msg: 'saved'});
    }
  });
};

/* DELETE /api/gameStat/:id */
exports.del = function (req, res) {
  var id = req.params.id;

  Gamestat.findById(id, function (err, gameStat) {
    if (err) {
      res.send(400, err);
    } else if (!gameStat) {
      res.send(404);
    } else {
      gameStat.remove(function (err) {
        if (err) {
          res.send(400, err);
        } else {
          res.send({success: true, msg: 'removed'});
        }
      });
    }
  });
};

/* GET /api/gameStat */
exports.search = function (req, res) {
  Gamestat.find(req.query, function (err, gameStatList) {
    if (err) {
      res.send(400, err);
    } else {
      res.send(gameStatList);
    }
  });
};

