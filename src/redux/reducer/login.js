/*
* @Author: xiongsheng
* @Date:   2016-09-26 18:10:40
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-24 14:16:23
*/

'use strict';
import { LOGIN} from '../action/'
//reducer其实也是个方法而已,参数是state和action,返回值是新的state
const defaultState = { name: 'default', status: '退出'};
export function login(state=defaultState, action) {
    const newState = {};
    switch (action.type) {
        case LOGIN:
            newState.name = action.content.name;
            newState.status = action.content.status;
            return Object.assign({}, state, newState);

        default:
            return state
    }
}


