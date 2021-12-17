const express = require('express');
const consign = require('consign');

const app = express()

consign()
    .include('system/middlewares.js')
    .then('app/routes')
    .then('system/boot.js')
    .into(app)