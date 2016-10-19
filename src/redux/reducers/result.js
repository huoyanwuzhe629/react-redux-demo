/*
* @Author: xiongsheng
* @Date:   2016-10-14 14:10:03
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-14 18:31:28
*/

'use strict';

import { SEARCH } from '../actions/';

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
const defaultState = {
        tableData: []
    };

export function result(state=defaultState, action) {
    const newState = {};
    switch (action.type) {

        case SEARCH:
            newState.tableData = action.content.tableData
            return Object.assign({}, state, newState);
        default:
            return state
    }
}
