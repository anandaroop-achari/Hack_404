import React from 'react'

import Input from '../common/Input'

export default React.createClass({
    getInitialState: function () {
        return { 
            data: []
        };
    },
    componentWillMount() {

    },
    componentDidMount() {
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
    onRowClick(state, rowInfo, column, instance) {
        return {}
	},
    render() {
       return <div className='login_modal'>
              <div className="logo">
                <i className="logo_img" aria-hidden="true"></i> 
                <span className="app_name"> 404 Found </span>
              </div>
              <form onSubmit={this.props.onLogin}>
                <Input type='text' name='username' placeholder='username' />
                <Input type='password' name='password' placeholder='password' />
                <button> Sign In</button>
              </form>
           </div>;
    }
})
