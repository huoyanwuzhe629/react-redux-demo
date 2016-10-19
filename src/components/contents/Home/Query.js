/*
* @Author: xiongsheng
* @Date:   2016-10-11 16:07:13
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-19 15:54:25
*/

'use strict';

import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { Input, Radio, Checkbox, Select, DatePicker, Button} from 'antd';
import { connect } from 'react-redux';
import * as TotalActions from '../../../redux/actions';

@connect(
  state => ({
     query: state.default.query
  })
  ,{...TotalActions}
)



class Query extends Component {

    render() {
        const {changeDistrict, changeCity, changeGroupName, query, changeChannel, changeStartTime, changeEndTime, changeLowPrice, changeHighPrice, clearAll, search} = this.props,

            RadioGroup = Radio.Group,
            CheckboxGroup = Checkbox.Group,
            Option = Select.Option,

            optionsWithDisabled = [
                { label: '北京', value: 'beijing'},
                { label: '天津', value: 'tianjin' },
            ];

        function disabledStartDate(startTime) {
            if (!startTime || !query.endTime) {
                return false;
            }
            return startTime.valueOf() > query.endTime.valueOf();
        }

        function disabledEndDate(endTime) {
            if (!endTime || !query.startTime) {
                return false;
            }
            return endTime.valueOf() <= query.startTime.valueOf();
        }
        return (
            <div className="query-container">
                <h3>过滤项</h3>
                <div className="query-line">
                    <div className="inline-div">
                        <label className="query-label">组名称：</label>
                        <Input style={{width:"165px"}} value={query.groupName} defaultValue="" onChange={changeGroupName}/>
                    </div>
                    <div className="query-group inline-div" >
                        <label className="query-label">投放领域：</label>
                        <RadioGroup  value={query.district} onChange={changeDistrict}>
                            <Radio value="0">全部领域</Radio>
                            <Radio  value="1">选择领域</Radio>
                        </RadioGroup>
                        <div className="inline-div">
                            <CheckboxGroup options={optionsWithDisabled} disabled={query.checkboxStatus}  value={query.citys} onChange={changeCity} />
                        </div>
                    </div>
                </div>
                <div className="query-line">
                    <div className="inline-div">
                        <label className="query-label">频&nbsp;&nbsp;&nbsp;道：</label>
                        <Select style={{width:"165px"}} defaultValue="-1" value={query.channel} onChange={changeChannel}>
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
                        <DatePicker disabledDate={disabledStartDate} value={query.startTime} onChange={changeStartTime} />
                        <label className="query-label" style = {{marginLeft:"10px"}}>结束时间：</label>
                        <DatePicker disabledDate={disabledEndDate} value={query.endTime} onChange={changeEndTime} />
                    </div>
                </div>
                <div className="query-line">
                    <div className="inline-div">
                        <label className="query-label">组出价：</label>
                        <Input style={{width:"76px"}} value={query.lowPrice} onChange={changeLowPrice}/>
                        <span>--</span>
                        <Input style={{width:"76px"}} value={query.highPrice} onChange={changeHighPrice}/>
                    </div>
                </div>
                <div className="query-line">
                    <Button type="primary" onClick={search}>查询</Button>
                    <Button type="primary" style={{marginLeft:"10px"}} onClick={clearAll}>清空</Button>
                </div>

            </div>

        )
    }
}
Query.propTypes = {
}
export default Query
