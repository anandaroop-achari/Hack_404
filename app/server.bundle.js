/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("superagent");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(3);

var _App = __webpack_require__(16);

var _App2 = _interopRequireDefault(_App);

var _Home = __webpack_require__(18);

var _Home2 = _interopRequireDefault(_Home);

var _Profile = __webpack_require__(20);

var _Profile2 = _interopRequireDefault(_Profile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import League from './components/League'
module.exports = _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: _App2.default },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/profile', component: _Profile2.default })
);
//import Game from './components/Games'

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _superagent = __webpack_require__(1);

var _superagent2 = _interopRequireDefault(_superagent);

var _apiHelper = __webpack_require__(23);

var _apiHelper2 = _interopRequireDefault(_apiHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var endPoint = 'http://tul1dsgdapp01.corporate.local:8089/v1/cqa-reports/';

var queries = {};
function getPath(url) {
    return Apis[url];
};

function postRequest(pathParam) {
    var path = _apiHelper2.default.doPostEndPoint(pathParam);
    return _superagent2.default.post(path.path).send(path.data).set('Content-Type', 'application/json');
}

exports.default = {

    getData: function getData(pathParam) {
        var queryString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var cb = arguments[2];

        //pathParam = pathParam.split("/")[1];
        var path = _apiHelper2.default.doGetEndPoint(pathParam);
        if (path.indexOf("postData") === -1) {
            return _superagent2.default.get(path);
        } else {
            return postRequest(pathParam);
        }
    },

    postData: function postData(pathParam) {
        var queryString = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var cb = arguments[2];

        var path = _apiHelper2.default.doPostEndPoint(pathParam);
        return _superagent2.default.post(path.path).send(path.data).set('Content-Type', 'application/json');
    }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var webpack = __webpack_require__(4);
var ExtractTextPlugin = __webpack_require__(25);
var CopyWebpackPlugin = __webpack_require__(24);
var path = __webpack_require__(2);
var config = {
    entry: {
        app: './index.js',
        vendor: ['jquery', 'react', 'react-dom', 'bootstrap/dist/js/bootstrap.min.js', 'react-bootstrap']
    },

    output: {
        path: path.join(__dirname, '/public'),
        filename: '[name].bundle.js',
        publicPath: '/'
    },

    plugins: [getImplicitGlobals(),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(), new webpack.optimize.UglifyJsPlugin(), new CopyWebpackPlugin([{ from: './images', to: 'images' }]), new CopyWebpackPlugin([{ from: './styles', to: '' }])],

    module: {
        loaders: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }, { test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/, loader: "imports?this=>window" },
        //{ test: require.resolve("jquery"), loader: "expose-loader?jQuery" },
        {
            test: /\.css$/,
            use: [{ loader: 'style-loader' }, {
                loader: 'css-loader',
                options: {
                    importLoaders: 1,
                    modules: true
                }
            }]
        }, {
            test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }]
        }]
    }
};

function getImplicitGlobals() {
    return new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    });
};

module.exports = config;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = [{"id":"","title":"Star Wars: The Last Jedi","imgUrl":"http://cps-static.rovicorp.com/2/310/open/disney_1040/program/24504400/sw-tlj_ih_k1_keystones_2000x3000.jpg","synopsis":"Rey learns the ways of the Force from Luke Skywalker, and develops a telepathic bond with Kylo Ren, who is struggling to master the Dark Side. Meanwhile, Stormtrooper-turned-Resistance fighter Finn goes on a risky mission behind enemy lines.","credits":[]},{"id":"","title":"Avengers","imgUrl":"http://cps-static.rovicorp.com/2/310/open/indemand/marvel's%20the%20avengers/_2by3/0912_avengers01.jpg","synopsis":"Rey learns the ways of the Force from Luke Skywalker, and develops a telepathic bond with Kylo Ren, who is struggling to master the Dark Side. Meanwhile, Stormtrooper-turned-Resistance fighter Finn goes on a risky mission behind enemy lines.","credits":[]},{"id":"","title":"Deadpool","imgUrl":"http://cps-static.rovicorp.com/2/310/open/20th_century_fox_603/program/29084625/_2by3/deadpool2_--.jpg","synopsis":"Rey learns the ways of the Force from Luke Skywalker, and develops a telepathic bond with Kylo Ren, who is struggling to master the Dark Side. Meanwhile, Stormtrooper-turned-Resistance fighter Finn goes on a risky mission behind enemy lines.","credits":[]}]

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AppConfig = {
	olympic: {
		type: "winter" //false-for disabling olympic fetch
	}
};

module.exports = AppConfig;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactCsv = __webpack_require__(26);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'App',
    render: function render() {
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'nav',
                { className: 'navbar navbar-default navbar-fixed-top' },
                _react2.default.createElement(
                    'div',
                    { className: 'container-fluid' },
                    _react2.default.createElement(
                        'div',
                        { className: 'navbar-header' },
                        _react2.default.createElement(
                            'a',
                            { className: 'navbar-brand', href: '#' },
                            _react2.default.createElement('img', { alt: 'Brand', src: './images/tivo.png' })
                        )
                    )
                )
            ),
            _react2.default.createElement(
                'div',
                { className: 'content' },
                this.props.children
            )
        );
    }
});

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Input',

    getInitialState: function getInitialState() {
        return {
            data: [],
            coloumns: [],
            loading: false
        };
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'Input' },
            _react2.default.createElement('input', { type: this.props.type, name: this.props.name, placeholder: this.props.placeholder, required: true, autocomplete: 'false' }),
            _react2.default.createElement('label', { 'for': this.props.name })
        );
    }

});

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Login = __webpack_require__(19);

var _Login2 = _interopRequireDefault(_Login);

var _superagent = __webpack_require__(1);

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Home',

    getInitialState: function getInitialState() {
        return {
            data: []
        };
    },
    componentDidMount: function componentDidMount() {
        console.log("ComponentDidMount--HOME");
        this.setState({ data: JSON.parse(jQuery("#data").text()) });
    },

    onLoginClick: function onLoginClick(evt) {
        evt.preventDefault();
        //alert("login");
        var x = new FormData();
        x.set("username", "test");
        x.set("password", "prajwal123");

        _superagent2.default.post('http://10.177.65.155:8080/server/login/')
        //.type('form')
        .send(x).then(function (res) {
            //window.location = "/profile";
            if (res.text.toUpperCase() === "SUCCESS") {
                window.location = "/profile";
            }
        });
        // return {
        //     onClick: e => {
        //         if (rowInfo.original.isOlympic === 'true')
        //             window.location = "/league/" + rowInfo.original.SportTypeId;
        //         else
        //             window.location = "/sports/" + rowInfo.original.SportTypeName;
        //     }
        // }
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'home-container' },
            _react2.default.createElement(_Login2.default, { onLogin: this.onLoginClick })
        );
    }
});
//import { request } from 'https';

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Input = __webpack_require__(17);

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Login',

    getInitialState: function getInitialState() {
        return {
            data: []
        };
    },
    componentWillMount: function componentWillMount() {},
    componentDidMount: function componentDidMount() {
        console.log("ComponentDidMount--Games");
        // let qs = "";
        // let that = this;
        // var params = [];
        // var param = {
        //     paramName: "startDate",
        //     paramValue: this.props.params.startDate
        // };
        // params.push(param);

        // param = {
        //     paramName: "endDate",
        //     paramValue: this.props.params.endDate
        // };
        // params.push(param);

        // param = {
        //     paramName: "competitionId",
        //     paramValue: this.props.params.name
        // };
        // params.push(param);
        // var postData = {
        //     pathKey: "sports",
        //     queryName: "sportGames",
        //     params: params
        // };
        // qs = postData;
        // requests.postData('/games', qs).end(function (err, resp) {
        //     that.setState({ data: resp.body.responseData})
        // });
        this.setState({ data: JSON.parse(jQuery("#data").text()) });
    },
    onRowClick: function onRowClick(state, rowInfo, column, instance) {
        return {};
    },
    render: function render() {
        return _react2.default.createElement(
            'div',
            { className: 'login_modal' },
            _react2.default.createElement(
                'div',
                { className: 'logo' },
                _react2.default.createElement('i', { className: 'logo_img', 'aria-hidden': 'true' }),
                _react2.default.createElement(
                    'span',
                    null,
                    ' App Name Here '
                )
            ),
            _react2.default.createElement(
                'form',
                { onSubmit: this.props.onLogin },
                _react2.default.createElement(_Input2.default, { type: 'text', name: 'username', placeholder: 'username' }),
                _react2.default.createElement(_Input2.default, { type: 'password', name: 'password', placeholder: 'password' }),
                _react2.default.createElement(
                    'button',
                    null,
                    ' Sign In'
                )
            )
        );
    }
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _superagent = __webpack_require__(1);

var _superagent2 = _interopRequireDefault(_superagent);

var _Results = __webpack_require__(21);

var _Results2 = _interopRequireDefault(_Results);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Profile',

    getInitialState: function getInitialState() {
        return {
            searchData: {},
            resultType: "recent",
            searchTerm: ""
        };
    },
    componentWillMount: function componentWillMount() {},
    componentDidMount: function componentDidMount() {
        console.log("ComponentDidMount--Profile");
        // let qs = "?paramName=teamId&paramValue=" + this.props.params.name;
        // let that = this;
        // requests.getData('/team', qs).end(function (err, resp) {
        //     that.setState({ data: resp.body.responseData})
        // });
        this.setState({ data: JSON.parse(jQuery("#data").text()) });
    },
    _handleKeyPress: function _handleKeyPress(e) {
        if (e.key === 'Enter') {
            var that = this;
            _superagent2.default.get('http://10.177.65.155:8080/server/search?id=' + this.state.searchTerm)
            //.type('form')
            .then(function (res) {
                that.setState({ searchData: JSON.parse(res.text), resultType: "search" });
                //window.location = "/profile";
                // if(res.text.toUpperCase() === "SUCCESS") {
                //     window.location = "/profile";
                //     }
            });
        } else {
            this.state.searchTerm += e.key;
            this.forceUpdate();
        }
    },
    onSearchClick: function onSearchClick(state, rowInfo, column, instance) {
        return {};
    },
    render: function render() {
        var searchHeader = this.state.resultType === "recent" ? _react2.default.createElement(
            'h2',
            null,
            'Recent Searches'
        ) : _react2.default.createElement(
            'h2',
            null,
            'Search Results'
        );
        return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement('div', { className: 'home-container blur' }),
            _react2.default.createElement(
                'div',
                { className: 'prof_content' },
                _react2.default.createElement(
                    'div',
                    { className: 'container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'field-input' },
                        _react2.default.createElement('input', { type: 'text', placeholder: 'Search...', value: this.state.searchTerm, onKeyPress: this._handleKeyPress }),
                        _react2.default.createElement('i', { className: 'fa fa-search search_btn' })
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'results' },
                    _react2.default.createElement(
                        'div',
                        { className: 'result_title' },
                        searchHeader
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'result_content' },
                        _react2.default.createElement(_Results2.default, { type: this.state.resultType, data: this.state.searchData })
                    )
                )
            )
        );
    }
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _recent = __webpack_require__(14);

var _recent2 = _interopRequireDefault(_recent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
    displayName: 'Results',

    getInitialState: function getInitialState() {
        return {
            data: [],
            matchUpData: [],
            teamsCount: 0
        };
    },
    componentWillMount: function componentWillMount() {},
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        var temp = [];
        temp = nextProps.type === "recent" ? [] : temp.push(nextProps.data);
        this.setState({ data: nextProps.type === "recent" ? _recent2.default : temp });
    },
    componentDidMount: function componentDidMount() {
        console.log("ComponentDidMount--League");
        // let qs = "?paramName=competitionId&paramValue=" + this.props.params.name;
        // let that = this;
        // requests.getData('/league', qs).end(function (err, resp) {
        //     that.setState({ 
        //         data: resp.body.responseData, 
        //         teamsCount: resp.body.responseData.length 
        //     });
        // });
        this.setState({ data: this.props.type === "recent" ? _recent2.default : this.state.data.push(this.props.data) });
    },
    onRowClick: function onRowClick(state, rowInfo, column, instance) {
        return {
            onClick: function onClick(e) {
                window.location = "/team/" + rowInfo.original.TeamId;
            }
        };
    },
    render: function render() {

        return _react2.default.createElement(
            'div',
            { className: 'res_container' },
            this.state.data.map(function (item, index) {
                return _react2.default.createElement(
                    'div',
                    { className: 'result-row' },
                    _react2.default.createElement(
                        'span',
                        { className: 'poster' },
                        _react2.default.createElement('img', { src: item.imgUrl })
                    ),
                    _react2.default.createElement(
                        'span',
                        { className: 'details' },
                        _react2.default.createElement(
                            'p',
                            { className: 'title' },
                            item.title
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            item.synopsis
                        )
                    )
                );
            })
        );
    }
});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(2);

var _path2 = _interopRequireDefault(_path);

var _webpack = __webpack_require__(4);

var _webpack2 = _interopRequireDefault(_webpack);

var _compression = __webpack_require__(8);

var _compression2 = _interopRequireDefault(_compression);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _fs = __webpack_require__(10);

var _fs2 = _interopRequireDefault(_fs);

var _server = __webpack_require__(11);

var _reactRouter = __webpack_require__(3);

var _routes = __webpack_require__(5);

var _routes2 = _interopRequireDefault(_routes);

var _requestHelper = __webpack_require__(6);

var _requestHelper2 = _interopRequireDefault(_requestHelper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var devConfig = __webpack_require__(7);
var app = (0, _express2.default)();

app.use((0, _compression2.default)());
var index = _fs2.default.readFileSync('views/layout.html', 'utf8');
var PROD = process.env.NODE_ENV ? false : true;
// Serve static files
if (!PROD) {
    devConfig.devtool = 'eval-source-map';
    var compiler = (0, _webpack2.default)(devConfig);

    app.use(__webpack_require__(12)(compiler, {
        noInfo: true,
        publicPath: devConfig.output.publicPath
    }));

    app.use(__webpack_require__(13)(compiler));
} else {
    app.use(_express2.default.static(_path2.default.join(__dirname, 'public'), { index: false }));
}

app.get('*', function (req, res) {
    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
        if (err) {
            res.status(500).send(err.message);
        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search);
        } else if (props) {
            // hey we made it!
            var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
            renderPage(req, res, appHtml);
        } else {
            res.status(404).send('Not Found');
        }
    });
});

function renderPage(req, res, appHtml) {
    console.log(req.originalUrl);
    res.send(index.replace(/<div id="root"><\/div>/, '<div id="root">' + appHtml + '</div>').replace(/<div id="data" class="hide"><\/div>/, '<div id="data" class="hide">{}</div>'));
}

var PORT = process.env.PORT || 4000;
app.listen(PORT, function () {
    console.log('Express server running at localhost:' + PORT);
});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//const endPoint = 'http://tul1dsgdapp01.corporate.local:8089/v1/cqa-reports/';
var endPoint = 'http://localhost:8089/v1/cqa-reports/';
var config = __webpack_require__(15);

var Apis = {
				"/": config.olympic.type ? "getData/sports/sportTypesOlympics" : "getData/sports/sportTypes",
				"/sports": "getData/sports/sportsCompetitions",
				"/league": "getData/sports/sportTeams",
				"/matchUpCoverage": "getData/sports/matchUpCoverage",
				"/logoCoverage": "getData/sports/logoCoverage",
				"/team": "getData/sports/sportPlayers",
				"/games": "postData"
};

var queries = {
				"/": config.olympic.type ? "?paramName=olympicType&paramValue=" + config.olympic.type : "",
				"/sports": "?paramName=sportType&paramValue=",
				"/league": "?paramName=competitionId&paramValue=",
				"/matchUpCoverage": "?paramName=competitionId&paramValue=",
				"/logoCoverage": "?paramName=competitionId&paramValue=",
				"/team": "?paramName=teamId&paramValue="
};

function getPostData(query, args) {
				if (query.indexOf("games") !== -1) return getGamesPostData(args);
}
function getPath(url) {
				return Apis[url];
};
function getQueryString(url) {
				return queries[url];
};
function getGamesPostData(args) {
				var params = [];
				var param = {
								paramName: "startDate",
								paramValue: args[1]
				};
				params.push(param);

				param = {
								paramName: "endDate",
								paramValue: args[2]
				};
				params.push(param);

				param = {
								paramName: "competitionId",
								paramValue: args[0]
				};
				params.push(param);
				var postData = {
								pathKey: "sports",
								queryName: "sportGames",
								params: params
				};
				return postData;
};

module.exports = {

				doGetEndPoint: function doGetEndPoint(url) {
								var path = url.split("/");
								var apiPath = endPoint + getPath("/" + path[1]) + getQueryString("/" + path[1]) + (path[2] ? path[2] : "");
								return apiPath;
				},

				doPostEndPoint: function doPostEndPoint(url) {
								var path = url.split("/");
								var apiPath = endPoint + getPath("/" + path[1]);
								var postData = getPostData(path[1], [path[2], path[3], path[4]]);
								return { path: apiPath, data: postData };
				}
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("copy-webpack-plugin");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("react-csv");

/***/ })
/******/ ]);