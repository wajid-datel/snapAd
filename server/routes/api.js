/**
 * Created by wajidkhilji on 17/04/2017.
 */
const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', function(req, res)  {
  res.send('api works');
});

module.exports = router;
