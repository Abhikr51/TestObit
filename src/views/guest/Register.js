import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core';
import { LOADEROFF, LOADERON, notification, validate } from '../../globals/__global_funcs';
import Animate from '../../components/Animate';
import Topbar from '../../components/Topbar';
import { rootURL } from '../../globals/__gobal_vars';
// import { InputAdornment } from '@material-ui/core';
import axios from 'axios';
import { connect } from 'react-redux';
import { setLogin } from '../../redux/actions/AuthActions';

class Register extends Component {

    state = {
        formdata: {
            name: '',
            dob: "2000-01-25",
            semester: '',
            gender: 'male',
            email: '',
            phone: '',
            stream: '',
            session: '',
            password: '',
            c_password: '',
        },
        errors: {
            name: false,
            dob: false,
            semester: false,
            email: false,
            phone: false,
            stream: false,
            session: false,
            password: false,
            c_password: false,
        },
        semesterList: [],
        streamList: [],
    }
    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    isValid = () => {
        let noErr = true
        let data = this.state.formdata
        let errObj = this.state.errors
        for (let [key, value] of Object.entries(data)) {
            if (value == "" || value == null) {
                errObj[key] = true
            } else {
                errObj[key] = false
            }
        }
        if (data.password !== data.c_password) {
            errObj['c_password'] = true
        } else {
            errObj['c_password'] = false
        }
        if (!errObj.email) {
            if (this.validateEmail(data.email)) {
                errObj['email'] = false
            } else {
                errObj['email'] = true

            }
        }
        for (let [key, value] of Object.entries(errObj)) {
            if (value) {
                noErr = false
            }
        }
        this.setState({ errors: errObj })
        return noErr;
    }
    registerSubmit = (event) => {
        event.preventDefault();

        if (this.isValid()) {
            LOADERON();
            axios.post(`${rootURL}/register`, {
                "name": this.state.formdata.name,
                "email": this.state.formdata.email,
                "dob": this.state.formdata.dob,
                "gender": this.state.formdata.gender,
                "semester": this.state.formdata.semester,
                "phone": this.state.formdata.phone,
                "stream": this.state.formdata.stream,
                "session": this.state.formdata.session,
                "password": this.state.formdata.password,
            }).then(res => {
                //success
                if (res.data.status) {
                    console.log(res);
                    localStorage.setItem('token', res.data.access_token);
                    localStorage.setItem('email', res.data.user.email);
                    localStorage.setItem('id', res.data.user.id);
                    localStorage.setItem('user_type', res.data.user.user_type);
                    // this.setState({ progress: false })
                    this.props.setLogin(res.data.user);
                    LOADEROFF();
                    this.props.history.push('/all-set/0');
                } else {
                    notification(res.data.errors[0], 'error');
                    LOADEROFF();
                }

            }).catch((err) => {
                console.log(err);
                LOADEROFF();
            })
        }
    }
    setData = (event, key) => {
        this.setState({
            formdata: { ...this.state.formdata, [key]: event.target.value }
        })
    }
    componentDidMount() {
        validate("register-form")
        LOADERON();
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        let stream = axios.post(rootURL + "/getStream", {}).then((res) => {
            //success
            this.setState({
                streamList: res.data.data
            })
            LOADEROFF();
        }).catch((err) => {
            LOADEROFF();
        })
        axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
        let semester = axios.post(rootURL + "/getSemester", {}).then((res) => {
            //success
            this.setState({
                semesterList: res.data.data
            })
            LOADEROFF();
        }).catch((err) => {
            LOADEROFF();
        })
        // Promise.all([stream, semester]).then(() => {
        //     LOADEROFF();
        // })
    }
    render() {
        return (
            <div className="wrapper mb-3">
                <Topbar text="Register"> </Topbar>
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <form className="register-form" onSubmit={this.registerSubmit} noValidate autoComplete="off">

                                <div className="row justify-content-center">
                                    <div className="col-12 my-1">
                                        <TextField
                                            value={this.state.formdata.name}
                                            onChange={(e) => { this.setData(e, 'name') }}
                                            error={this.state.errors.name}
                                            helperText={(this.state.errors.name) ? "Field is required" : ""}


                                            // InputProps={{
                                            // startAdornment: (
                                            //     <InputAdornment position="start">
                                            //     <i className="fas fa-eye text-primary"></i>
                                            //     </InputAdornment>
                                            // ),
                                            // }} 
                                            label="Name" />
                                    </div>
                                    <div className="col-12 my-1">
                                        <TextField
                                            id="date"
                                            value={this.state.formdata.dob}
                                            onChange={(e) => { this.setData(e, 'dob') }}
                                            label="Birthday"
                                            type="date"
                                            helperText={(this.state.errors.dob) ? "Field is required" : ""}
                                            // defaultValue="2000-01-01"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                        {/* <TextField
                                            value={this.state.formdata.dob}
                                            onChange={(e) => { this.setData(e, 'dob') }}
                                            error={this.state.errors.dob}
                                            helperText={(this.state.errors.dob) ? "Field is required" : ""}
                                            id="date" type="date" placeholder="select date" label="Date of birth" /> */}

                                    </div>
                                    <div className="col-12 my-1">
                                        <FormControl component="fieldset">
                                            <FormLabel component="label">Gender</FormLabel>
                                            <RadioGroup aria-label="gender" name="gender1" value={this.state.formdata.gender} onChange={(e) => { this.setData(e, 'gender') }}>
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="other" control={<Radio />} label="Other" />

                                            </RadioGroup>
                                        </FormControl>
                                    </div>

                                    <div className="col-12 my-1">
                                        <FormControl error={this.state.errors.semester}>
                                            <InputLabel id="semester">Semester</InputLabel>
                                            <Select
                                                labelId="semester"
                                                value={this.state.formdata.semester}
                                                onChange={(e) => { this.setState({ formdata: { ...this.state.formdata, semester: e.target.value } }) }}
                                                error={this.state.errors.semester}
                                                helperText={(this.state.errors.semester) ? "Field is required" : ""}
                                            >

                                                {
                                                    this.state.semesterList.map((item, index) => (
                                                        <MenuItem key={index} value={item.id}>{item.title}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="col-12 my-1">
                                        <TextField
                                            value={this.state.formdata.email}
                                            onChange={(e) => { this.setData(e, 'email') }}
                                            error={this.state.errors.email}
                                            helperText={(this.state.errors.email) ? "Email must contains '@' and '.'" : ""}
                                            label="Email" />

                                    </div>
                                    <div className="col-12 my-1">
                                        <TextField
                                            value={this.state.formdata.phone}
                                            onChange={(e) => { if (e.target.value.length < 11) { this.setData(e, 'phone') } }}
                                            error={this.state.errors.phone}
                                            helperText={(this.state.errors.phone) ? "Field is required" : ""}
                                            maxLength="10"
                                            label="Phone" />

                                    </div>
                                    <div className="col-12 my-1">

                                        <FormControl error={this.state.errors.stream} >
                                            <InputLabel id="stream">Stream</InputLabel>
                                            <Select
                                                labelId="stream"
                                                value={this.state.formdata.stream}
                                                onChange={(e) => { this.setState({ formdata: { ...this.state.formdata, stream: e.target.value } }) }}
                                                error={this.state.errors.stream}
                                                helperText={(this.state.errors.stream) ? "Field is required" : ""}
                                            >
                                                {
                                                    this.state.streamList.map((item, index) => (
                                                        <MenuItem disabled={item.id == "2"} key={index} value={item.id}>{item.title}</MenuItem>
                                                    ))
                                                }
                                            </Select>
                                        </FormControl>

                                    </div>
                                    <div className="col-12 my-1">
                                        <TextField
                                            value={this.state.formdata.session}
                                            onChange={(e) => { this.setData(e, 'session') }}
                                            error={this.state.errors.session}
                                            helperText={(this.state.errors.session) ? "Field is required" : ""}
                                            label="Session" />

                                    </div>
                                    <div className="col-12 my-1">
                                        <TextField
                                            value={this.state.formdata.password}
                                            onChange={(e) => { this.setData(e, 'password') }}
                                            error={this.state.errors.password}
                                            helperText={(this.state.errors.password) ? "Field is required" : ""}
                                            type="password" label="Password" />

                                    </div>
                                    <div className="col-12 my-1">
                                        <TextField
                                            value={this.state.formdata.c_password}
                                            onChange={(e) => { this.setData(e, 'c_password') }}
                                            error={this.state.errors.c_password}
                                            helperText={(this.state.errors.c_password) ? "Password mismatche !" : ""}
                                            type="password" label="Confirm Password" />

                                    </div>
                                    <div className="col-12">
                                        {/* <Link to="/verify" > */}
                                        <button type="submit" className="btn btn-primary btn-block">Register</button>
                                        {/* </Link> */}
                                    </div>
                                    <div className="col-12  mt-3">
                                        <p className="text-center">Already have an Account ? Go to <Link to="/" > Login </Link> </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(null, { setLogin })(Register);