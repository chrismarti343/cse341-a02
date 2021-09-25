const express = require('express');

const router = express.Router();

let books = [];

router.get('/', (req, res, next) => {
    res.render('views/a02', {
      title: 'Assigment 02',
      path: '/a02', // EJS
      books : books
    });
  });

module.exports = router;