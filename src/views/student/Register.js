import React, { Component } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import { pageTransitions, pageVariants } from '../../globals/__gobal_vars'
import TextField from '@material-ui/core/TextField';
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select } from '@material-ui/core';
import { validate } from '../../globals/__global_funcs';
// import { InputAdornment } from '@material-ui/core';
export default class Register extends Component {

    state={
        formdata : {
            name : '',
            dob : '',
            semester : '',
            gender : 'male',
            email : '',
            phone : '',
            stream : '',
            session : '',
            password : '',
            c_password : '',
        },
        errors : {
            name : false,
            dob : false,
            semester : false,
            email : false,
            phone : false,
            stream : false,
            session : false,
            password : false,
            c_password : false,
        }
        
    }

    isValid=()=>{
        let noErr = true
        let data = this.state.formdata
        let errObj = this.state.errors
        for (let [key, value] of Object.entries(data)) {
           if(value == "" || value == null ){
               errObj[key] = true
            } else{
                errObj[key] = false
            }
        }
        if(data.password !== data.c_password){
            errObj['c_password'] = true
        }else{
            errObj['c_password'] = false
        }
        for (let [key, value] of Object.entries(errObj)) {
            if(value){
                noErr = false
            }
         }
         this.setState({errors : errObj})
        return noErr; 
    }
    registerSubmit = (event) => {
        event.preventDefault();
        if(this.isValid()){
            console.log("riun")
        }
    }
    setData = (event , key) =>{
        this.setState({
            formdata : {...this.state.formdata, [key] :event.target.value}
        })
    }
    componentDidMount(){
        validate("register-form")
    }
    render() {
        return (
            <motion.div
                initial='initial'
                animate='animate'
                exit='out'
                variants={pageVariants}
                transition={pageTransitions}

                className="wrapper mb-3">
                <div className="topbar">
                    <div className="topbar-text">
                        Register
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <form className="register-form" onSubmit={this.registerSubmit}  noValidate autoComplete="off">

                                <div className="row justify-content-center">
                                    <div className="col-12 my-1">
                                        <TextField
                                        value = {this.state.formdata.name}
                                        onChange={(e)=>{this.setData(e,'name')}}
                                        error={this.state.errors.name}
                                        helperText = {(this.state.errors.name)? "Field is required" : ""}
                        
                                        
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
                                        value = {this.state.formdata.dob}
                                        onChange={(e)=>{this.setData(e,'dob')}}
                                        error={this.state.errors.dob}
                                        helperText = {(this.state.errors.dob)? "Field is required" : ""}
                                        id="date" type="date" placeholder="select date" label="Date of birth" />

                                    </div>
                                    <div className="col-12 my-1">
                                        <FormControl component="fieldset">
                                            <FormLabel  component="label">Gender</FormLabel>
                                            <RadioGroup aria-label="gender" name="gender1" value={this.state.formdata.gender} onChange={(e)=>{this.setData(e,'gender')}}>
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                
                                            </RadioGroup>
                                        </FormControl>
                                    </div>
                                    
                                    <div className="col-12 my-1">
                                    <FormControl  error={this.state.errors.semester}>
                                            <InputLabel id="semester">Semester</InputLabel>
                                            <Select
                                                labelId="semester"
                                                value={this.state.formdata.semester}
                                                onChange={(e)=>{this.setState({formdata : {...this.state.formdata, semester :e.target.value}})}}
                                                error={this.state.errors.semester}
                                                helperText = {(this.state.errors.semester)? "Field is required" : ""}
                                            >
                                                <MenuItem value={'Sem-1'}>Sem - 1</MenuItem>
                                                <MenuItem value={'Sem-2'}>Sem - 2</MenuItem>
                                                <MenuItem value={'Sem-3'}>Sem - 3</MenuItem>
                                                <MenuItem value={'Sem-4'}>Sem - 4</MenuItem>
                                                <MenuItem value={'Sem-5'}>Sem - 5</MenuItem>
                                                <MenuItem value={'Sem-6'}>Sem - 6</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div className="col-12 my-1">
                                        <TextField
                                        value = {this.state.formdata.email}
                                        onChange={(e)=>{this.setData(e,'email')}}
                                        error={this.state.errors.email}
                                        helperText = {(this.state.errors.email)? "Field is required" : ""}
                                        label="Email" />

                                    </div>
                                    <div className="col-12 my-1">
                                        <TextField
                                        value = {this.state.formdata.phone}
                                        onChange={(e)=>{this.setData(e,'phone')}}
                                        error={this.state.errors.phone}
                                        helperText = {(this.state.errors.phone)? "Field is required" : ""}
                                        label="Phone" />

                                    </div>
                                    <div className="col-12 my-1">
                                        
                                        <FormControl error={this.state.errors.stream} >
                                            <InputLabel id="stream">Stream</InputLabel>
                                            <Select
                                                labelId="stream"
                                                value={this.state.formdata.stream}
                                                onChange={(e)=>{this.setState({formdata : {...this.state.formdata, stream :e.target.value}})}}
                                                error={this.state.errors.stream}
                                                helperText = {(this.state.errors.stream)? "Field is required" : ""}
                                            >
                                                <MenuItem value={'BCA'}>BCA</MenuItem>
                                                <MenuItem value={'BBA'}>BBA</MenuItem>
                                            </Select>
                                        </FormControl>

                                    </div>
                                    <div className="col-12 my-1">
                                        <TextField
                                        value = {this.state.formdata.session}
                                        onChange={(e)=>{this.setData(e,'session')}}
                                        error={this.state.errors.session}
                                        helperText = {(this.state.errors.session)? "Field is required" : ""}
                                        label="Session" />

                                    </div>
                                    <div className="col-12 my-1">
                                        <TextField
                                        value = {this.state.formdata.password}
                                        onChange={(e)=>{this.setData(e,'password')}}
                                        error={this.state.errors.password}
                                        helperText = {(this.state.errors.password)? "Field is required" : ""}
                                        type="password" label="Password" />

                                    </div>
                                    <div className="col-12 my-1">
                                        <TextField
                                        value = {this.state.formdata.c_password}
                                        onChange={(e)=>{this.setData(e,'c_password')}}
                                        error={this.state.errors.c_password}
                                        helperText = {(this.state.errors.c_password)? "Password mismatche !" : ""}
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
            </motion.div>

        )
    }
}
