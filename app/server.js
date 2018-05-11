import express from 'express'
import path from 'path'
import webpack from 'webpack';
import compression from 'compression'
import React from 'react'
import fs from 'fs'
import { renderToString } from 'react-dom/server'
import { match, RouterContext } from 'react-router'
import routes from './modules/routes'
import request from './utils/requestHelper'
const devConfig = require("./webpack.config.js");
var app = express()

app.use(compression())
const index = fs.readFileSync('views/layout.html', 'utf8');
const PROD = process.env.NODE_ENV?false:true;
// Serve static files
if (!PROD) {
  devConfig.devtool = 'eval-source-map';
  const compiler = webpack(devConfig);

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: devConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static(path.join(__dirname, 'public'), { index: false }))
}

app.get('*', (req, res) => {
    match({ routes, location: req.url }, (err, redirect, props) => {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search)
        } else if (props) {
            // hey we made it!
            const appHtml = renderToString(<RouterContext {...props} />)
            renderPage(req, res, appHtml);
        } else {
            res.status(404).send('Not Found')
        }
    })
})

function renderPage(req, res, appHtml) {
    console.log(req.originalUrl)
        res.send(index.replace(
            /<div id="root"><\/div>/,
            `<div id="root">${appHtml}</div>`
        ).replace(/<div id="data" class="hide"><\/div>/, `<div id="data" class="hide">{}</div>`));
}

var PORT = process.env.PORT || 4000
app.listen(PORT, function () {
    console.log('Express server running at localhost:' + PORT)
})
