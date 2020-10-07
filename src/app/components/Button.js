import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Button extends Component{
    static propTypes={
        className: PropTypes.value
    }
    render() {
        return <input
            type="button"
            className={this.props.className}
            value={this.props.value} />
    }
}
export default Button;