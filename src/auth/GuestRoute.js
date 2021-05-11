import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { redirect } from '../globals/__global_funcs';

const GuestRoute = ({ component: Component, ...rest }) => {
    


    return (
        (
            <Route 
                {...rest} 
                render={ props => (
                    !rest.loggedIn ? (
                        <Component {...props} />
                    ) : ( 
                        <Redirect 
                            to={{ 
                                pathname : redirect(rest.UserType),
                                state : { from: props.location }
                             }} 
                        />
                    )
                )} 
            />
        )
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.auth.loggedIn,
        UserType : state.auth.user.user_type
    };
}; 

export default connect(mapStateToProps)(GuestRoute);