const express = require("express");
const router = express.Router();

const cvCtrl = require('../controllers/cvCrud');


router.post('/addCv', cvCtrl.addCv);



module.exports = router;
