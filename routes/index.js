var express = require('express');
var router = express.Router();
var models  = require('../models');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

router.get('/export', async function (req, res, next) {
  const trash = await models.SanMarcos.findAll({raw: true});
  const name = __dirname + '/csv/'+ new Date().getTime() +'.csv';
  const csvWriter = createCsvWriter({
    path: name,
    header: [
      {id: 'datapoint_id', title: 'datapoint_id'},
      {id: 'latitude', title: 'latitude'},
      {id: 'longitude', title: 'longitude'},
      {id: 'kab_rank', title: 'kab_rank'},
      {id: 'litter_count', title: 'litter_count'},
      {id: 'date_taken', title: 'date_taken'}
    ]
  });

  const result = await csvWriter.writeRecords(trash)       // returns a promise
      .then(() => {
        res.download(name)
      });
});

router.get('/map', async function (req, res, next) {
  const trash = await models.SanMarcos.findAll({raw: true});
  res.send(trash);
});


module.exports = router;
