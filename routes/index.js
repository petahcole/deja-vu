var express = require('express');
var router = express.Router();
var knex = require('../db/db-connection')

/* GET home page. */
router.get('/', function(req, res, next) {
  return knex('characters')
    .then((result)  =>  {
      res.json(result)
    })
});

router.get('/:id', (res, req, next) =>  {
  return knex('characters').where('id', id)
    .then((result)  =>  {
      res.json(result)
    })
})
module.exports = router;
