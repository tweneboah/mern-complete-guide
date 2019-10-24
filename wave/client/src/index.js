import React from 'react';
import ReactDOM from 'react-dom';
import './Resources/css/styles.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reduxThunk from 'redux-thunk';
import Reducer from './redux/reducers/index'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, reduxThunk)(createStore)
ReactDOM.render(
   <Provider store = {createStoreWithMiddleware(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
     <BrowserRouter>
       <Routes />
    </BrowserRouter>

   </Provider>
,document.getElementById('root'));


