import React, { Component } from 'react'

export default class LoaderCMP extends Component {
    render() {
        return (
            <div id="inner-loader">
                <div className="loader-overlay">
                    <div className="loader book">
                        <figure className="page" />
                        <figure className="page" />
                        <figure className="page" />
                    </div>
                </div>
            </div>

        )
    }
}
