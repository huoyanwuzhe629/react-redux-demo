//程序入口
//参考了阮一峰redux教程1,2,3
//http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import routes from './src/router/router';
import configureStore from './src/redux/store/configureStore';
import { Router,useRouterHistory, hashHistory  } from 'react-router';
import { createHashHistory } from 'history'
import { syncHistoryWithStore } from 'react-router-redux';

import 'antd/dist/antd.min.css';
import './asset/css/main.css';

//store作为一个容器保存数据，整个应用只有一个，
//通过redux的createStore函数来生成，本例中见/redux/store/configureStore.js
const store = configureStore(),
    //为了去除react-router中的随机参数_k
    history = syncHistoryWithStore(useRouterHistory(createHashHistory)({ queryKey: false }), store);

render(
    //由React-Redux提供的Provider组件传入store对象，
    //让通过connect方法生成的容器组件拿到state
    <Provider store={store}>
        <Router history={history} routes={routes}/>
    </Provider> ,
    document.getElementById('app')
);


