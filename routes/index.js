var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  res.status(200).json({ 
    author: "Pablo Sarango",
    email: "pablosarangouchuari@gmail.com",
    description: "Proyecto desarrollado para la empresa ODERBIZ."
  })
});

module.exports = router;
