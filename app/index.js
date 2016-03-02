'use strict';
 const express = require('express');

 const app = express();

 app.set('PORT', process.env.PORT || 3000);

// const f = (req, res) => { res.status(200).send('ok') };
app.get('/', (req, res) => {
  return res.status(200).send('ok');
})

const server = app.listen(app.get('PORT'), (err) => {
  if (err) throw err;

  console.log(`Server is go!`);
})

 module.exports = app;
