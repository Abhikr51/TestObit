import React, { Component } from 'react'

export default class LongTopbar extends Component {
    static defaultProps = {
        text : "",
        
    }
    render() {
        return (
            <React.Fragment>
                <div className="topbar fixed-top topbar-long" {...this.props}>
                    <div className="topbar-text topbar-long-text h-30"> {this.props.text} </div>
                         {this.props.children ?
                        this.props.children
                        : ""}
                </div>
                <div style={{position: "relative" , visibility : "hidden"}} className="topbar topbar-long"></div>
            </React.Fragment>
        )
    }
}
