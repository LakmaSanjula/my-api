const express = require('express');
const serverless = require('serverless-http');
const app = express();
const router = express.Router();

app.get("/.netlify/functions/api/greet", (req, res) => {
  const name = req.query.name || "Lakma";
  res.json({
    message: `Hello, ${name}!`,
  });
});

//app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);

