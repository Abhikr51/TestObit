import React, { Component } from 'react'

export default class Modal extends Component {
    static defaultProps = {
        children: <h1 align="center">Insert Component</h1>,
        visible: false,
        onClose: () => { },
        style: {
            width: "90%",
            height: "90%",
        },
        className: "",
        header : "Header"
    }
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
        this.modalBody = {
            background: "rgb(255, 255, 255)",
            position: "fixed",
            width: "565px",
            top: "0",
            zIndex: "900",
            overflow: "auto",
            borderRadius: "5px",
            boxShadow: "0 0 8px 2px rgba(0, 0, 0, 0.369)",
            bottom: "0",
            right: "0",
            left: "0",
            margin: "10px auto",
            padding : "10px",
            paddingTop : "0px",
            transitition : ".6s all"
        }
        this.overlayModal = {
            position: "fixed",
            top: "0px",
            left: "0px",
            width: "100%",
            bottom: "0",
            right: "0",
            height: "100%",
            background: "rgb(0 0 0 / 10%)",
            zIndex: "850",
            backdropFilter: "blur(3px)",
            overflow: "hidden",
        }
    }
    render() {
        return (
            <div>
                {
                    (this.props.visible) ?
                        <div style={this.overlayModal}>
                            <div  {...this.props} style={{ ...this.modalBody, ...this.props.style }} className={this.props.className}>
                                <div className="container-fluid">
                                    <div style={{ position: "sticky", top: 0 }} className="row card-header bg-white  px-1 py-2">
                                        <h5 className=" col-9 mb-2 font-weight-light">{this.props.header} </h5>
                                        <div className="col-3 mb-2 ">
                                            <button className="btn btn-danger float-right btn-sm ripple" onClick={() => { this.props.onClose() }}> <i className="fas fa-times"></i> </button>
                                        </div>
                                    </div>
                                    <div>
                                        {(this.props.children !== null) ?

                                            React.cloneElement(this.props.children, { closeModal: this.props.onClose })
                                            : null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div> : null
                }
            </div>
        )
    }
}