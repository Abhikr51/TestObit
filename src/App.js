import React, { Suspense ,useEffect } from 'react';
import './css/style.css';
import AuthRoute from "./auth/AuthRoute"
import GuestRoute from "./auth/GuestRoute"
import { Route, Switch, useLocation } from 'react-router';
import { createMuiTheme } from '@material-ui/core/styles';
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from '@material-ui/styles';
import { useHistory } from "react-router-dom";
import { LOADEROFF } from './globals/__global_funcs';
//components
// const Login = React.lazy(() => import('./views/guest/Login'));
// const Register = React.lazy(() => import('./views/guest/Register'));
// const VerifyEmail = React.lazy(() => import('./views/guest/VerifyEmail'));
// const AllSet = React.lazy(() => import('./views/guest/AllSet'));
// const StudentLayout = React.lazy(() => import('./views/student/layouts/StudentLayout'));
// const Page404 = React.lazy(() => import('./views/guest/Page404'));
import Login from './views/guest/Login';
import Register from './views/guest/Register';
import VerifyEmail from './views/guest/VerifyEmail';
import AllSet from './views/guest/AllSet';
import StudentLayout from './views/student/layouts/StudentLayout';
import Page404 from './views/guest/Page404';


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
  const activeUser = (UserType) => {
    switch (UserType) {
      case 5:
        return <React.Fragment>


        </React.Fragment>
      case 2:
        return (<React.Fragment>
          <AuthRoute path="/student" component={StudentLayout} />
          <AuthRoute path="/all-set" component={AllSet} />
        </React.Fragment>)
      case 0:
        return <AuthRoute exact path="/" component={Login} />
      default:
        return ""
    }
  }
  let history = useHistory();
  const [goUrl, SetGoUrl] = React.useState("")
  const location = useLocation()
  // useEffect(() => {
  //   LOADEROFF();
    
  // }, [])
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <form className="fixed-bottom" onSubmit={(e) => { e.preventDefault(); history.push(goUrl) }}>
          <div className="input-group flex-nowrap">
            <input type="text" value={goUrl} onChange={(e) => { SetGoUrl(e.target.value) }} placeholder="Go URL (debug mode)" className="form-control " />
            <button className="btn btn-primary rounded-0 input-group-text" id="addon-wrapping">Go</button>
          </div>
        </form>
        <AnimatePresence exitBeforeEnter >
          {/* <Suspense  fallback={""}> */}
            <Switch location={location} key={location.pathname} >

              <GuestRoute exact path="/" component={Login} />
              <GuestRoute path="/register" component={Register} />
              <GuestRoute path="/verify" component={VerifyEmail} />

              {
                activeUser(parseInt(2))
              }
              <Route component={Page404} />
            </Switch>
          {/* </Suspense> */}
        </AnimatePresence>
      </ThemeProvider>
    </React.Fragment>
  )
}
