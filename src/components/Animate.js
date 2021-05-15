import React, { Component } from 'react'

export default class Animate extends Component {
    pageVariants = {
        initial: {
            opacity: 0,
            x: "-80vw",
            scale: 0.8,
        },
        animate: {
            opacity: 1,
            x: "0",
            scale: 1,
        },
        out: {
            opacity: 0,
            x: "80vw",
            scale: 1.2,
        },
    }
    pageTransitions = {
        type: "tween",
        // type : "spring",
        // stiffness : "250",
        ease: "anticipate",
        duration: .3
    }
    render() {
        return (
            <React.Fragment>
                <div
                    // initial='initial'
                    // animate='animate'
                    // exit='out'
                    // variants={this.pageVariants}
                    // transition={this.pageTransitions}
                    {...this.props}

                >
                    {this.props.children ?
                            this.props.children

                        : ""}
                </div>
            </React.Fragment>
        )
    }
}
