import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from "./redux/store"
import { HashRouter as Router} from 'react-router-dom';
import { rootURL } from './globals/__gobal_vars';
import axios from 'axios'
import { LOADEROFF, LOADERON } from './globals/__global_funcs';
const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <Router>
          <App />
        </Router>
      </React.StrictMode>
    </Provider>,
    document.getElementById('root')
  );
}
renderApp();

if(localStorage.getItem('token')){
  LOADERON();
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
  axios.post(`${rootURL}/auth/getUser`).then(res => {
    store.dispatch({ type: 'SET_LOGIN', payload: res.data.data })
    renderApp();
    LOADEROFF();
  }).catch((err)=>{
    // console.log("Unauthorized")
    console.log(err);
    renderApp();
    LOADEROFF();
  })
} else {
  renderApp();
}








// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
