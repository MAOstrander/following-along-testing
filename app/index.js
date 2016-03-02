'use strict';
 const express = require('express');

 const app = express();

 const { IS_A_TEST } = require('../config');

 app.set('PORT', process.env.PORT || 3000);

// const f = (req, res) => { res.status(200).send('ok') };
app.get('/', (req, res) => {
  return res.status(200).send('ok');
})

app.get('/user/:id', (req, res) => {
  return res.status(200).send('ok');
})
app.get('/user', (req, res) => {
  return res.status(400).send('not-ok');
})

if (!IS_A_TEST) {
  const server = app.listen(app.get('PORT'), (err) => {
    if (err) throw err;

    console.log(`Server is go!`);
  })
}

 module.exports = app;
