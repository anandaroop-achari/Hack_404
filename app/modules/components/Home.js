import React from 'react'
import Login from "./Login"
//import { request } from 'https';
import request from 'superagent';

export default React.createClass({
    getInitialState: function () {
        return { 
            data: []
        };
    },
    componentDidMount: function() {
        console.log("ComponentDidMount--HOME");
        this.setState({ data: JSON.parse(jQuery("#data").text()) });
    },

    onLoginClick(evt) {
        evt.preventDefault();
        //alert("login");
        var x= new FormData();
        x.set("username", "test");
        x.set("password", "prajwal123");

        request
        .post('http://10.177.65.155:8080/server/login/')
        //.type('form')
        .send(x)
        .then(function(res) {
        //window.location = "/profile";
        if(res.text.toUpperCase() === "SUCCESS") {
            window.location = "/profile";
        }


        })
        // return {
        //     onClick: e => {
        //         if (rowInfo.original.isOlympic === 'true')
        //             window.location = "/league/" + rowInfo.original.SportTypeId;
        //         else
        //             window.location = "/sports/" + rowInfo.original.SportTypeName;
        //     }
        // }
    },
    render() {
        return  <div className="home-container">
                    <Login onLogin={this.onLoginClick}/>
        </div>

    }
})
