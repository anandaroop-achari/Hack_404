import React from 'react'

import RecentData from '../../model/data/recent.json'

export default React.createClass({
    getInitialState: function(){
	    return { 
            data: [], 
            matchUpData: [], 
            teamsCount: 0
        };
	},
    componentWillMount() {

    },
    componentWillReceiveProps(nextProps) {
        let temp = [];
        temp = (nextProps.type === "recent")?[]:temp.push(nextProps.data);
        this.setState({ data: (nextProps.type === "recent")?RecentData:temp});
    },
    componentDidMount() {
        console.log("ComponentDidMount--League");
        // let qs = "?paramName=competitionId&paramValue=" + this.props.params.name;
        // let that = this;
        // requests.getData('/league', qs).end(function (err, resp) {
        //     that.setState({ 
        //         data: resp.body.responseData, 
        //         teamsCount: resp.body.responseData.length 
        //     });
        // });
        this.setState({ data: this.props.type === "recent"?RecentData:this.state.data.push(this.props.data)});
    },
    onRowClick(state, rowInfo, column, instance) {
        return {
            onClick: e => {
                window.location = "/team/" + rowInfo.original.TeamId;
            }
        }
	},
    render() {

        return <div className="res_container">
                    {this.state.data.map(function(item, index) {
                        return <div className="result-row">
                                    <span className="poster">
                                        <img src={item.imgUrl}/>
                                    </span>
                                    <span className="details">
                                        <p className="title">{item.title}</p>
                                        <p>{item.synopsis}</p>
                                    </span>
                                </div>
                    })}

               </div>
        
    }
})
