/*
* @Author: xiongsheng
* @Date:   2016-10-11 16:07:13
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-26 19:43:29
*/

'use strict';

import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { Input, Radio, Checkbox, Select, DatePicker, Button} from 'antd';
import { connect } from 'react-redux';
import { get } from 'lodash';
import * as TotalActions from '../../../../redux/action';

//UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑
//React-Redux 提供connect方法，用于从 UI 组件生成容器组件，将这两种组件连起来
//ui组件中的props对应上redux中的state
//此处的connect使用了装饰器的写法，具体原理请看
//http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html
@connect(
    state => ({
        params: get(state, 'routing.locationBeforeTransitions.query')
    }), {...TotalActions }
)

//ui组件，组件内操作太多都用action来触发的话，光在输入框内输入字符串就能触发很多次action。
//所以ui组件内的状态改变，通过组件自身的方法来改变自身的state来管理，而不走redux的state
class Query extends Component {
    //设置个默认的Query状态，以方便清空处理
    getDefaultState() {
        return {
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
    }
    //设置ui内部的state，定义初始值
    //this.props 表示那些一旦定义，就不再改变的特性，
    //而 this.state 是会随着用户互动而产生变化的特性
    state = this.getDefaultState();
    //组件加载前会执行的方法，且只会执行一次
    componentWillMount() {
        //前面connect方法中将路由的参数传入了组件的props中的params中，
        const params = this.props.params;
        //解析路由的参数并将组件的相关状态改变
        this.setState(params);
    }

    componentDidMount() {
        //因为在componentWillMount中setState，在该阶段state并不马上生效，
        //所以在组件加载完成之后执行
        this.props.search(this.state);
    }

    //ui中的相关改变状态的方法
    changeGroupName(e) {
        this.setState({
            groupName: e.target.value
        });
    }

    changeDistrict(e) {
        const citys = e.target.value == 0 ?  ['beijing', 'tianjin'] : [],
            checkboxStatus = e.target.value == 0 ? true : false;

        this.setState({
            district: e.target.value,
            citys,
            checkboxStatus
        });
    }

    changeCity(citys) {
        this.setState({
            citys
        });
    }

    changeChannel(channel) {
        this.setState({
            channel
        });
    }

    changeStartTime(startTime) {
        this.setState({
            startTime
        });
    }

    changeEndTime(endTime) {
        this.setState({
            endTime
        });
    }

    //日历禁用
    disabledStartDate(startTime) {
        if (!startTime || !this.state.endTime) {
            return false;
        }
        return startTime.valueOf() > this.state.endTime.valueOf();
    }

    //日历禁用
    disabledEndDate(endTime) {
        if (!endTime || !this.state.startTime) {
            return false;
        }
        return endTime.valueOf() <= this.state.startTime.valueOf();
    }

    changeLowPrice(e) {
        this.setState({
            lowPrice: e.target.value
        });
    }

    changeHighPrice(e) {
        this.setState({
            highPrice: e.target.value
        });
    }

    clearAll() {
        this.setState(this.getDefaultState());
    }

    render() {
        //props中获取需要与其他组件通信的action
        const {search, clearAll} = this.props,
            RadioGroup = Radio.Group,
            CheckboxGroup = Checkbox.Group,
            Option = Select.Option,

            optionsWithDisabled = [
                { label: '北京', value: 'beijing'},
                { label: '天津', value: 'tianjin' },
            ],
            //获取组件内部state的属性值
            {
                groupName,
                district,
                citys,
                checkboxStatus,
                channel,
                startTime,
                endTime,
                lowPrice,
                highPrice
            } = this.state;

        return (
            <div className="query-container">
                <h3>过滤项</h3>
                <div className="query-line">
                    <div className="inline-div">
                        <label className="query-label">组名称：</label>
                        <Input style={{width:"165px"}} value={groupName} defaultValue="" onChange={(e)=>this.changeGroupName(e)}/>
                    </div>
                    <div className="query-group inline-div" >
                        <label className="query-label">投放领域：</label>
                        <RadioGroup  value={district} onChange={(e)=>this.changeDistrict(e)}>
                            <Radio value="0">全部领域</Radio>
                            <Radio  value="1">选择领域</Radio>
                        </RadioGroup>
                        <div className="inline-div">
                            <CheckboxGroup options={optionsWithDisabled} disabled={checkboxStatus}  value={citys} onChange={(citys)=>this.changeCity(citys)} />
                        </div>
                    </div>
                </div>
                <div className="query-line">
                    <div className="inline-div">
                        <label className="query-label">频&nbsp;&nbsp;&nbsp;道：</label>
                        <Select style={{width:"165px"}} defaultValue="-1" value={channel} onChange={(channel)=>this.changeChannel(channel)}>
                            <Option value="-1">请选择</Option>
                            <Option value="shoppingSearch">购物搜索</Option>
                            <Option value="dsp">dsp</Option>
                            <Option value="sohu">搜狐微门户</Option>
                            <Option value="qqNav">qq导航页</Option>
                            <Option value="sogouPhoneticize">搜狗拼音</Option>
                        </Select>
                    </div>
                    <div className="query-group inline-div">
                        <label className="query-label">开始时间：</label>
                        <DatePicker disabledDate={(startTime)=>this.disabledStartDate(startTime)} value={startTime} onChange={(startTime)=>this.changeStartTime(startTime)} />
                        <label className="query-label" style = {{marginLeft:"10px"}}>结束时间：</label>
                        <DatePicker disabledDate={(endTime)=>this.disabledEndDate(endTime)} value={endTime} onChange={(endTime)=>this.changeEndTime(endTime)} />
                    </div>
                </div>
                <div className="query-line">
                    <div className="inline-div">
                        <label className="query-label">组出价：</label>
                        <Input style={{width:"76px"}} value={lowPrice} onChange={(e)=>this.changeLowPrice(e)}/>
                        <span>--</span>
                        <Input style={{width:"76px"}} value={highPrice} onChange={(e)=>this.changeHighPrice(e)}/>
                    </div>
                </div>
                <div className="query-line">
                    <Button type="primary" onClick={()=>search(this.state)}>查询</Button>
                    <Button type="primary" style={{marginLeft:"10px"}} onClick={()=>this.clearAll()}>清空</Button>
                </div>

            </div>

        )
    }
}
Query.propTypes = {
}
export default Query
