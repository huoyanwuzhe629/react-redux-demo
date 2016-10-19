
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
export const RETURN_ZERO = 'RETURN_ZERO';
export const SHOW_MSG = 'SHOW_MSG';
export const LOGIN = 'LOGIN';
export const CHANGE_DISTRICT = 'CHANGE_DISTRICT';
export const CHANGE_CITY = 'CHANGE_CITY';
export const CHANGE_GROUPNAME = 'CHANGE_GROUPNAME';
export const CHANGE_CHANNEL = 'CHANGE_CHANNEL';
export const CHANGE_STARTTIME = 'CHANGE_STARTTIME';
export const CHANGE_ENDTIME = 'CHANGE_ENDTIME';
export const CHANGE_LOWPRICE = 'CHANGE_LOWPRICE';
export const CHANGE_HIGHPRICE = 'CHANGE_HIGHPRICE';
export const CLEAR_ALL = 'CLEAR_ALL';
export const SEARCH = 'SEARCH';

export function loginAction(status) {
    if (status == '退出') {
        return {
            type: LOGIN,
            content: {
                name: '',
                status: '登录'
            }
        }
    } else {
        return (dispatch) => {
            fetch('/query/login.action').then(response=>{
                return response.json();
            }).then(json=>{
                dispatch({
                    type: LOGIN,
                    content: {
                        name: json.login.name,
                        status: json.login.status
                    }
                });
            });
        }
    }

}

export function changeDistrict(e) {
    const citys = e.target.value == 0 ?  ['beijing', 'tianjin'] : [];
    const checkboxStatus = e.target.value == 0 ? true : false;
    return {
        type: CHANGE_DISTRICT,
        content: {
            district: e.target.value,
            citys,
            checkboxStatus
        }
    };
}

export function changeCity(citys) {
    return {
        type: CHANGE_CITY,
        content: {
            citys
        }
    }
}

export function changeGroupName(e) {
    return {
        type: CHANGE_GROUPNAME,
        content: {
            groupName: e.target.value
        }
    }
}

export function changeChannel(channel) {
    return {
        type: CHANGE_CHANNEL,
        content: {
            channel
        }
    }
}

export function changeStartTime(time) {

    return {
        type: CHANGE_STARTTIME,
        content: {
            startTime: time
        }
    }
}

export function changeEndTime(time) {
    return {
        type: CHANGE_ENDTIME,
        content: {
            endTime: time
        }
    }
}

export function changeLowPrice(e) {
    return {
        type: CHANGE_LOWPRICE,
        content: {
            lowPrice: e.target.value
        }
    }
}

export function changeHighPrice(e) {
    return {
        type: CHANGE_HIGHPRICE,
        content: {
            highPrice: e.target.value
        }
    }
}

export function clearAll() {
    return {
        type: CLEAR_ALL
    }
}

export function search() {
    return (dispatch, getState)=>{
        const formData = new FormData(),
            {query} = getState().default;
        for (const [key,value] of Object.entries(query)) {
            formData.append(key, value)
        }
        fetch('/query/search.action', {
            method: 'POST',
            body: formData
        }).then(response=>{
            return response.json();
        }).then(json=>{
            json = filterData(query, json);
            dispatch({
                type: SEARCH,
                content: {
                    tableData: json
                }
            });
        })
    }
}

//过滤方法
function filterData(query, data) {
    const regionDict = {
        '01': ['tianjin'],
        '10': ['beijing'],
        '11': ['beijing', 'tianjin']
    }, channelDict = {
        shoppingSearch: '购物搜索',
        dsp: 'dsp',
        sohu: '搜狐微门户',
        qqNav: 'qq导航页',
        sogouPhoneticize: '搜狗拼音'
    };

    if (query.lowPrice != '' && query.highPrice != '' && parseFloat(query.lowPrice) > parseFloat(query.highPrice)) {
        alert('出价后框不能小于前框！');
        return false;
    }
    data = data.filter((d)=> {
        if (d.groupName.indexOf(query.groupName) === -1) {
            return false;
        }

        if (query.citys.sort().toString().indexOf(regionDict[d.region].toString()) === -1){
            return false;
        }

        if (query.channel != '-1' && d.channel !== channelDict[query.channel]) {
            return false;
        }

        if (query.startTime) {
            const filterDate = Date.parse(new Date(query.startTime.format('YYYY-MM-DD'))),
                resultDate = Date.parse(new Date(d.startDate));
            if (filterDate > resultDate) {
                return false;
            }
        }

        if (query.endTime) {
            const filterDate = Date.parse(new Date(query.endTime.format('YYYY-MM-DD'))),
                resultDate = Date.parse(new Date(d.endDate));
            if (filterDate < resultDate) {
                return false;
            }
        }

        if (query.lowPrice && parseFloat(d.price) < query.lowPrice) {
            return false;
        }

        if (query.highPrice && parseFloat(d.price) > query.highPrice) {
            return false;
        }
        return true;
    });
    return data;
}


