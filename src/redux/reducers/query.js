/*
* @Author: xiongsheng
* @Date:   2016-10-12 14:22:46
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-17 18:35:39
*/

'use strict';
import { CHANGE_DISTRICT, CHANGE_CITY, CHANGE_GROUPNAME, CHANGE_CHANNEL, CHANGE_STARTTIME, CHANGE_ENDTIME, CHANGE_LOWPRICE, CHANGE_HIGHPRICE, CLEAR_ALL} from '../actions/';

//reducer其实也是个方法而已,参数是state和action,返回值是新的state
const defaultState = {
        district:'0',
        checkboxStatus: true,
        citys:['beijing', 'tianjin'],
        groupName:'',
        channel: '-1',
        startTime: null,
        endTime: null,
        lowPrice: '',
        highPrice: ''
    };
export function query(state=defaultState, action) {
    const newState = {};
    switch (action.type) {
        case CHANGE_DISTRICT:

            newState.district= action.content.district;
            newState.checkboxStatus= action.content.checkboxStatus;
            newState.citys= action.content.citys;
            return Object.assign({}, state, newState);

        case CHANGE_CITY:
            newState.citys = action.content.citys;
            return Object.assign({}, state, newState);

        case CHANGE_GROUPNAME:
            newState.groupName = action.content.groupName;
            return Object.assign({}, state, newState);

        case CHANGE_CHANNEL:
            newState.channel = action.content.channel;
            return Object.assign({}, state, newState);

        case CHANGE_STARTTIME:
            newState.startTime = action.content.startTime;
            return Object.assign({}, state, newState);

        case CHANGE_ENDTIME:
            newState.endTime = action.content.endTime;
            return Object.assign({}, state, newState);

        case CHANGE_LOWPRICE:
            newState.lowPrice = action.content.lowPrice;
            return Object.assign({}, state, newState);

        case CHANGE_HIGHPRICE:
            newState.highPrice = action.content.highPrice;
            return Object.assign({}, state, newState);

        case CLEAR_ALL:
            return Object.assign({}, state, defaultState)

        default:
            return state
    }
}
