'use strict'

const router = require('express').Router()
const {Candy} = require('../db')

router.get('/', (req, res, next) => {
  Candy.findAll()
    .then(candy => {
      res.status(200).send(candy);
    })
    .catch(next)
})

module.exports = router;
