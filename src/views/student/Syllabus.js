import { Button, IconButton} from '@material-ui/core'
import React, { Component } from 'react'
import Animate from '../../components/Animate'
import Modal from '../../components/Modal'
import Topbar from '../../components/Topbar'

export default class Syllabus extends Component {
    state = {
        courses: [
            {
                sem: "First Semester",
                subjects: [
                    {
                        code: "BBCACCHC101",
                        title: "Computer Fundamentals",
                        content: "ccc"
                    },
                    {
                        code: "BBCACCHC102",
                        title: "Introduction to C Programming",
                        content: "cccc"
                    },
                    {
                        code: "**103",
                        title: "**One from pool of Generic Electives",
                        content: null
                    },
                    {
                        code: "BAECCEST104",
                        title: "Environmental Studies",
                        content: "ccc"
                    },
                ]
            },
            {
                sem: "Second Semester",
                subjects: [
                    {
                        code: "BBCACCHC201	",
                        title: "Digital Logic",
                        content: "ccc"
                    },
                    {
                        code: "BBCACCHC202",
                        title: "Data Structure using C",
                        content: "ccc"
                    },
                    {
                        code: "**203",
                        title: "**One from pool of Generic Electives",
                        content: null
                    },
                    {
                        code: "**204",
                        title: "**One from pool of AECC-MIL (ENGLISH / MIL )",
                        content: null
                    },
                ]
            },
            {
                sem: "Third Semester",
                subjects: [
                    {
                        code: "BBCACCHT301	",
                        title: "Computer Networks",
                        content: "ccc"
                    },
                    {
                        code: "BBCACCHC302",
                        title: "Principles of Operating System",
                        content: "ccc"
                    },
                    {
                        code: "BBCACCHC303",
                        title: "Introduction to Algorithm",
                        content: "ccc"
                    },
                    {
                        code: "**304",
                        title: "**One from pool of Generic Electives",
                        content: null
                    },
                    {
                        code: "BBCASEHC305",
                        title: "Programming in Python",
                        content: "ccc"
                    },
                ]
            },
            {
                sem: "Fourth Semester",
                subjects: [
                    {
                        code: "BBCACCHC401	",
                        title: "Database Management System",
                        content: "ccc"
                    },
                    {
                        code: "BBCACCHC402",
                        title: "Microprocessor - 8085",
                        content: "ccc"
                    },
                    {
                        code: "BBCACCHC403",
                        title: "Object Oriented Programming using JAVA",
                        content: "ccc"
                    },
                    {
                        code: "**404",
                        title: "**One from pool of Generic Electives",
                        content: null
                    },
                    {
                        code: "BBCASEHT405",
                        title: "Computer Organization",
                        content: "ccc"
                    },
                ]
            },
            {
                sem: "Fifth Semester",
                subjects: [
                    {
                        code: "BBCACCHT501	",
                        title: "Theory of Computation",
                        content: "ccc"
                    },
                    {
                        code: "BBCACCHC502",
                        title: "Internet & E-Commerce",
                        content: "ccc"
                    },
                    {
                        code: "**503",
                        title: "**One from pool of Discipline Specific Electives",
                        content: null
                    },
                    {
                        code: "**504",
                        title: "**One from pool of Discipline Specific Electives",
                        content: null
                    },
                ]
            },
            {
                sem: "Sixth Semester",
                subjects: [
                    {
                        code: "BBCACCHC601	",
                        title: "Web Technology",
                        content: "ccc"
                    },
                    {
                        code: "BBCACCHS602",
                        title: "Project Work",
                        content: "ccc"
                    },
                    {
                        code: "**603",
                        title: "**One from pool of Discipline Specific Electives",
                        content: null
                    },
                    {
                        code: "**604",
                        title: "One from pool of Discipline Specific Electives",
                        content: null
                    },
                ]
            },
        ],
        visible : false,
        selectedContent : {
            header : "Viewer",
            content : ""
        }
    }
    render() {
        return (
            <div>
                <Topbar text={<span><i className="fas fa-book-open"></i> Syllabus</span>}>
                    <IconButton onClick={this.props.toggleDrawer('left', true)}> <i style={{ fontSize: "20px" }} className="fas fa-bars  text-white"></i> </IconButton >
                    <IconButton className="float-right" onClick={this.props.togglePopper}> <i style={{ fontSize: "20px" }} className="fas fa-ellipsis-v  text-white"></i> </IconButton >
                </Topbar>

                <Animate>
                    <div className="wrapper">
                        {
                            this.state.courses.map((item, index) => (
                                <div key={index}>
                                    <h4 className="text-center text-muted">{item.sem}</h4>
                                    <table className="table table-bordered  table-sm">
                                        <thead className="table-light">
                                            <tr>
                                                <th className="text-center">Course Code</th>
                                                <th className="text-center">Course Title</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                item.subjects.map((subject, sindex) => (
                                                    <tr key={sindex}>
                                                        <td>{subject.code}</td>
                                                        <td>
                                                            {
                                                                (subject.content) ?
                                                                    <Button onClick={()=>{this.setState({visible : true ,selectedContent : {header : subject.title ,content : subject.content}})}} style={{ padding: "0", fontSize: "12px", textTransform: "initial" }} color="primary">
                                                                        {subject.title}
                                                                    </Button>
                                                                    : <span style={{fontSize : "12px"}}>{subject.title}</span> 
                                                            }
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            ))
                        }
                    </div>
                </Animate>
                <Modal
                visible = {this.state.visible}
                onClose = {()=>{this.setState({visible  : false})}}
                header = {this.state.selectedContent.header}
                style= { {
                width: "90%",
                height: "90%",}}
                className= ""
                >
                    <p>{this.state.selectedContent.content} </p>
                </Modal>
            </div>
        )
    }
}
