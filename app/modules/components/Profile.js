import React from 'react'
import request from 'superagent';
import Results from './Results'

export default React.createClass({
    getInitialState: function () {
        return { 
            searchData: {},
            resultType: "recent",
            searchTerm: ""
        };
    },
    componentWillMount() {

    },
    componentDidMount() {
        console.log("ComponentDidMount--Profile");
        // let qs = "?paramName=teamId&paramValue=" + this.props.params.name;
        // let that = this;
        // requests.getData('/team', qs).end(function (err, resp) {
        //     that.setState({ data: resp.body.responseData})
        // });
        this.setState({ data: JSON.parse(jQuery("#data").text()) });
    },
    _handleKeyPress(e) {
        if (e.key === 'Enter') {
            var that = this;
             request
                .get('http://10.177.65.155:8080/server/search?id=' + this.state.searchTerm)
                //.type('form')
                .then(function(res) {
                    that.setState({searchData: JSON.parse(res.text), resultType: "search"});
                //window.location = "/profile";
                // if(res.text.toUpperCase() === "SUCCESS") {
                //     window.location = "/profile";
                //     }
                })
              
            } else {
                this.state.searchTerm += e.key;
                this.forceUpdate();
            }
    },
    onSearchClick(state, rowInfo, column, instance) {
        return {}
    },
    render() {
        let searchHeader = this.state.resultType === "recent"? <h2>Recent Searches</h2>: <h2>Search Results</h2>
        return  <div>
                    <div className="home-container blur">
                    </div>
                    <div className = "prof_content">
                        <div className="container">
                            <div className="field-input">
                                <input type="text" placeholder="Search..." value={this.state.searchTerm} onKeyPress={this._handleKeyPress}/><i className="fa fa-search search_btn"></i>
                            </div>
                        </div>

                        <div className="results">
                            <div className="result_title">{searchHeader}</div>
                            <div className="result_content">
                                <Results type={this.state.resultType} data={this.state.searchData} />
                            </div>
                        </div>
                    </div>
                </div>
    }
})
