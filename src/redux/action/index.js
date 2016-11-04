export const LOGIN = 'LOGIN';
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

export function search(query) {
    window.location.hash = `#\index/group?groupName=${query.groupName}&channel=${query.channel}`;
    return (dispatch, getState)=>{
        const formData = new FormData();
        query = query || {};
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


