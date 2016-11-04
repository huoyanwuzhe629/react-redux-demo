/*
 * @Author: xiongsheng
 * @Date:   2016-10-14 14:01:12
 * @Last Modified by:   xiongsheng
 * @Last Modified time: 2016-10-26 19:43:34
 */

'use strict';


import React, { Component, PropTypes } from 'react';
import { Router, Route, Link } from 'react-router';
import { Table } from 'antd';
import { connect } from 'react-redux';
import * as TotalActions from '../../../../redux/action';

@connect(
    state => ({
        result: state.default.result
    }), {...TotalActions }
)
class ResultTable extends Component {

    render() {
        const { result } = this.props,
            locale = {
                emptyText: '没有找到符合条件推广组',
            },
            columns = [{
                title: '推广组',
                dataIndex: 'groupName',
            }, {
                title: '地域',
                dataIndex: 'region',
                render(region) {
                    const regionDict = {
                        '01': '天津',
                        '10': '北京',
                        '11': '北京 天津'
                    };
                    return regionDict[region];
                }
            }, {
                title: '频道',
                dataIndex: 'channel'
            }, {
                title: '开始时间',
                dataIndex: 'startDate',
                className: 'column-right',
                sorter: (a, b) => {
                    const aDate = Date.parse(new Date(a.startDate)),
                        bDate = Date.parse(new Date(b.startDate));
                    return aDate - bDate;
                }
            }, {
                title: '结束时间',
                dataIndex: 'endDate',
                className: 'column-right',
                sorter: (a, b) => {
                    const aDate = Date.parse(new Date(a.endDate)),
                        bDate = Date.parse(new Date(b.endDate));
                    return aDate - bDate;
                }
            }, {
                title: '预算',
                dataIndex: 'budget',
                className: 'column-right',
                sorter: (a, b) => {
                    return a.budget - b.budget;
                }
            }, {
                title: '出价',
                dataIndex: 'price',
                className: 'column-right',
                sorter: (a, b) => {
                    return a.price - b.price;
                }
            }, {
                title: '点击率',
                dataIndex: 'clickRate',
                className: 'column-right',
                render(clickRate) {
                    return parseFloat(clickRate * 100).toFixed(2) + '%';
                },
                sorter: (a, b) => {
                    return a.clickRate - b.clickRate;
                }
            }, {
                title: '点击量',
                dataIndex: 'clickCount',
                className: 'column-right',
                sorter: (a, b) => {
                    return a.clickCount - b.clickCount;
                }
            }, {
                title: '状态',
                dataIndex: 'status',
                render(status) {
                    if (status == '有效') {
                        return <font color = "green" > { status } < /font>;
                    } else {
                        return <font color = "brown" > { status } < /font>;
                    }
                }
            }];

        return (
            < div className = "result-container" >
                < Table columns = { columns }
                dataSource = { result.tableData }
                bordered locale = { locale }/>
            </div>
        )
    }
}
ResultTable.propTypes = {}
export default ResultTable
