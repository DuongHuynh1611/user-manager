import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import axios from 'axios';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css';

const sagaMiddleware = createSagaMiddleware();

axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api';
axios.defaults.baseURL='https://rem.dbwebb.se/api';
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

const store =createStore(reducers,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App/></Provider>
, document.getElementById('root')
);
