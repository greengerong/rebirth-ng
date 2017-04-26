const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const bodyParser = require('body-parser');
const multer = require('multer')
const uploadDir = path.join(__dirname, 'uploads');
const app = express();


var storage = multer.diskStorage({
  destination: '.tmp/upload/',
  filename: function (req, file, cb) {
    // cb(null, file.originalname);
    crypto.pseudoRandomBytes(16, function (err, raw) {
      const fileName = file.originalname;
      cb(null, raw.toString('hex') + Date.now() + fileName.substr(fileName.lastIndexOf(".")));
    });
  }
});

const upload = multer({storage: storage});

app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
  console.log("Request '" + req.url + "' coming!");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/greeting', function (req, res) {
  res.send({desc: 'rebirth demo'});
});

app.post('/upload', upload.single('files'), function (req, res) {
  var file = req.file;

  console.log('文件类型：%s', file.mimetype);
  console.log('原始文件名：%s', file.originalname);
  console.log('文件大小：%s', file.size);
  console.log('文件保存路径：%s', file.path);

  res.send({
    fieldname: file.fieldname,
    mimetype: file.mimetype,
    originalname: file.originalname,
    size: file.size,
    path: file.path
  });

});

app.listen(3000);
