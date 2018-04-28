import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import configureStore from './store';

ReactDOM.render(
    <Provider store={configureStore()}><App /></Provider>, document.getElementById('root'));