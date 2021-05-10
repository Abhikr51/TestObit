import React, { Component } from 'react'

export default class Topbar extends Component {
    static defaultProps = {
        text : "",
        
    }
    render() {
        return (
            <React.Fragment>
                <div className="topbar fixed-top" {...this.props}>
                    <div className="topbar-text"> {this.props.text} </div>
                         {this.props.children ?
                        this.props.children
                        : ""}
                </div>
                <div style={{position: "relative" , visibility : "hidden"}} className="topbar"></div>
            </React.Fragment>
        )
    }
}
