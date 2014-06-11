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
