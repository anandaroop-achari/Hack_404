import React from 'react'

export default React.createClass({
    getInitialState: function () {
        return {
            data: [], 
            coloumns: [],
            loading: false
        };
    },
    render: function() {
    return <div className='Input'>
              <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } required autocomplete='false'/>
              <label for={ this.props.name } ></label>
           </div>
  }

    });