/*
* @Author: xiongsheng
* @Date:   2016-10-26 17:50:27
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-26 20:20:56
*/

'use strict';
import React, { Component} from 'react';
import {Link} from 'react-router';

class SubNav extends Component {
    //Home组件分为查询栏Query和结果展示列表（ResultTable）组成
    render() {
        return (
            <div className="submenu">
                <ul>
                    <li><Link to="index/plan" activeClassName="active" >计划</Link></li>
                    <li><Link to="index/group" activeClassName="active" >组</Link></li>
                    <li><Link to="index/style" activeClassName="active" >创意</Link></li>
                    <li><Link to="index/keyWord" activeClassName="active" >关键词</Link></li>

                </ul>
            </div>
        );
    }
}

export default SubNav
