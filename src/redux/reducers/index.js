import { combineReducers } from 'redux';
import {login} from './login';
import {query} from './query';
import {result} from './result';
//使用redux的combineReducers方法将所有reducer打包起来

const rootReducer = combineReducers({
    login,
    query,
    result
})
export default rootReducer
