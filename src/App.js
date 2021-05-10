import './css/style.css';
import React from 'react';
import { Route, Switch, useLocation } from 'react-router';
import Login from './views/guest/Login';
import AuthRoute from "./auth/AuthRoute"
import GuestRoute from "./auth/GuestRoute"
import { AnimatePresence } from "framer-motion";
import Register from './views/guest/Register';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import VerifyEmail from './views/guest/VerifyEmail';
import AllSet from './views/guest/AllSet';
import StudentLayout from './views/student/layouts/StudentLayout';
import Page404 from './views/guest/Page404';

import { useHistory } from "react-router-dom";

export default function App(props) {
  const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#432fbf',
      },
      // secondary: {
      //   // This is green.A700 as hex.
      //   main: '#11cb5f',
      // },
    },
  });
  let history = useHistory();
  const [goUrl , SetGoUrl] = React.useState("")
  const location = useLocation()
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <form className="fixed-bottom" onSubmit={(e) => { e.preventDefault();  history.push(goUrl) }}>
          <div className="input-group flex-nowrap">
            <input  type="text" value={goUrl} onChange={(e) => {SetGoUrl(e.target.value) }} placeholder="Go URL (debug mode)" className="form-control " />
            <button className="btn btn-primary rounded-0 input-group-text" id="addon-wrapping">Go</button>
          </div>
        </form>
        <AnimatePresence exitBeforeEnter >
          <Switch location={location} key={location.pathname} >

            <Route exact path="/" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/verify" component={VerifyEmail} />
            <Route path="/all-set" component={AllSet} />



            <Route path="/student" component={StudentLayout} />
            <Route path="/" component={Page404} />
          </Switch>
        </AnimatePresence>
      </ThemeProvider>
    </React.Fragment>
  )
}
