import './css/style.css';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import Login from './views/student/Login'; 
import AuthRoute from "./auth/AuthRoute"
import GuestRoute from "./auth/GuestRoute"
import { AnimatePresence } from "framer-motion"; 
import Register from './views/student/Register';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import VerifyEmail from './views/student/VerifyEmail';
import AllSet from './views/student/AllSet';
import StudentLayout from './views/student/layouts/StudentLayout';


export default function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main:'#432fbf',
      },
      // secondary: {
      //   // This is green.A700 as hex.
      //   main: '#11cb5f',
      // },
    },
  });
  const location = useLocation()
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AnimatePresence exitBeforeEnter >
          <Switch location={location} key={location.pathname} >
          
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/verify" component={VerifyEmail} />
              <Route exact path="/all-set" component={AllSet} />


              
              <Route exact path="/student" component={StudentLayout} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
  </React.Fragment>
  )
}
