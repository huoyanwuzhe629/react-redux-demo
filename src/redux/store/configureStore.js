import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import * as reducers from '../reducer';

//中间件相关介绍
//http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html

//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使被 dispatch 的 function 会接收 dispatch 作为参数，并且可以异步调用它
let middlewares = [thunk];

if (process.env.NODE_ENV !== 'production') {
    //开发环境加入logger中间件
    const logger = require('redux-logger');
    middlewares = [...middlewares, logger];
}

const createStoreWithMiddleware = compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(initialState) {
    //将各部分的reducer合并在一起
    const reducer = combineReducers({...reducers, routing: routerReducer});
    const store = createStoreWithMiddleware(reducer, initialState)

    //热替换选项
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducer', () => {
            const nextReducers = require('../reducer');
            const nextReducer = combineReducers({...nextReducers, routing: routerReducer});
            store.replaceReducer(nextReducer);
        })
    }

    return store
}
