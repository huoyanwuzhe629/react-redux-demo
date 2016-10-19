import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './routes';
import configureStore from './redux/store/configureStore';
import { Router, hashHistory  } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import 'antd/dist/antd.min.css';
import './asset/css/main.css';


const store = configureStore(),
    history = syncHistoryWithStore(hashHistory, store);

render(
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider> ,
    document.getElementById('app')
);


