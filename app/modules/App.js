import React from 'react'
import {CSVLink} from 'react-csv';

export default React.createClass({
    render() {
        return (
            <div>
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#">
                                <img alt="Brand" src="./images/tivo.png"></img>
                            </a>
                        </div>
                    </div>
                </nav>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
})
