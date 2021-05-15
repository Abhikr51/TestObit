import { Divider } from '@material-ui/core'
import React, { Component } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
export default class TestCMP extends Component {
    state = {
        questions: Array.from({ length: 100 }, (_, i) => i + 1),
        choice : null
    }
    render() {
        return (
            <div className="wrapper p-0">
                <div className="test-main">
                    <div className="">
                        <div className="row mb-2">
                            <div className="col-8">
                                <b className="text-primary" >Q</b> : 49/100
                           </div>
                            <div className="col-4 text-right">
                                <i className="fas fa-stopwatch text-primary"></i> 2:31
                           </div>
                        </div>
                        <Divider />
                        <div className="test-area">

                            <div className="row my-2">
                                <div className="col-12">
                                    <p className="text-justify">
                                        <b>Q.49 </b>lorem500 Lorem ipsum dolor sit amet cehenderit harum quis maxime. Eveniet voluptatem eius, fugit adipisci aperiam natus quos.

                                </p>
                                </div>
                            </div>
                            <div className="row my-2">
                                <div className="col-12">
                                    <FormControl>
                                        <RadioGroup aria-label="choices" name="gender1" value={this.state.choice} onChange={(e)=>{this.setState({choice : e.target.value})}}>
                                            <FormControlLabel value="c-1" control={<Radio />} label="Choice - 1" />
                                            <FormControlLabel value="c-2" control={<Radio />} label="Choice - 2" />
                                            <FormControlLabel value="c-3" control={<Radio />} label="Choice - 3" />
                                            <FormControlLabel value="c-4"  control={<Radio />} label="Choice - 4" />
                                        </RadioGroup>
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-nav">
                        <div className="">

                            <div className="row">
                                <div className="col-4 px-0">
                                    <button className="btn btn-sm btn-block rounded-0 text-white btn-primary" >Prev</button>
                                </div>
                                <div className="col-4 px-0">
                                    <button className="btn btn-sm btn-block rounded-0 text-white btn-primary" >Skip</button>
                                </div>
                                <div className="col-4 px-0">
                                    <button className="btn btn-sm btn-block rounded-0 text-white btn-primary" >Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="side-q ">
                    {
                        this.state.questions.map((item) => (
                            <div className="q-box">
                                <button className={`btn btn-floating ${item == 49 ? "bg-secondary text-white" : "bg-white"}  mx-auto`}>{item}</button>
                            </div>
                        ))

                    }

                </div>
            </div>
        )
    }
}
