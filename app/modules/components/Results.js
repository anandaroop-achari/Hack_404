import React from 'react'
import localstorage from 'localStorage'
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
        let search = [];
        //(nextProps.type !== "recent")?search.push(nextProps.data);
        let temp = JSON.parse(localstorage.getItem("recent_search"));
        if(nextProps.type !== 'recent') {
            search.push(nextProps.data);
            if(temp) {
                let exists = 0;
                temp.map((item)=> {
                    if(item.movie_id === nextProps.data.movie_id)
                        exists = 1;
                });
                if(exists === 0)
                    temp.push(nextProps.data);
                localstorage.setItem("recent_search", JSON.stringify(temp));
            } else {
                localstorage.setItem("recent_search", JSON.stringify(search));
            }
            this.setState({ data: search});
        } else {
            if(temp) {
                this.setState({data: temp});
            } else {
                this.setState({data: RecentData})
            }
        }
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
                                        <p>{item.overview}</p>
                                    </span>
                                </div>
                    })}

               </div>
        
    }
})
