import React, { Component } from 'react';

class Text extends Component{
    render() {
        return <input type="text" id="content" value={this.props.value} readOnly={true}/>
    }
}
export default Text;