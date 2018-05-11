import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './modules/routes'
window.jQuery = require('expose-loader?$jQuery!jquery');
// import 'jquery';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

render(
    <Router routes={routes} history={browserHistory} />,
    document.getElementById('app')
)
