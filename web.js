// Project: homework-submit
// File: web.js
// Author: Len Payne
//
// Copyright 2014 Len Payne
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

//== Imports of External Libraries
var express = require('express');
var path = require('path');
var fs = require('fs');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
var scrypt = require('scrypt');
var md5 = require('MD5');

//== Setting Up the App
var app = express();
app.use(bodyParser());

//== Pseudo-Constant Declarations
var mongoUri = process.env.MONGOLAB_URI ||
  process.env.MONGOHQ_URL ||
  'mongodb://localhost/homework-submit';
var SESSION_TIMEOUT = 600;

//== Configuration for scrypt Hashing Module
var scryptParameters = scrypt.params(0.8);
scrypt.hash.config.keyEncoding = "ascii";
scrypt.hash.config.outputEncoding = "hex";
scrypt.verify.config.keyEncoding = "ascii";
scrypt.verify.config.hashEncoding = "hex";

//== Begin Section / => Static File Server ==
//===========================================

//== Default Route => Load the Homepage
app.get('/', function(req, res) {
  res.sendfile(path.join('public', 'index.html'));
});

//== "Web Server" Route => Translate Any File Request to Public Folder
app.get(/^\/([\w\-\.\/]*\.(?:html|css|js|gif|png|jpeg|jpg|ico|pdf))$/, function(req, res) {
  var filename = path.join('public', req.params[0]);
  fs.exists(filename, function(exists) {
    if (exists)
      res.sendfile(filename);
    else
      res.status(404).sendfile(path.join('public', '404.html'));
  })
});
