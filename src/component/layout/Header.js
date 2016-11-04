/*
* @Author: xiongsheng
* @Date:   2016-09-27 16:23:31
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-26 20:19:56
*/

'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';

import * as TotalActions from '../../redux/action';
import { get } from 'lodash';

@connect(
  state => ({
    login: state.default.login,
    pathname: get(state, 'routing.locationBeforeTransitions.pathname').substring(1)
  })
  ,{...TotalActions}
)

class Header extends Component {

    componentWillMount() {
        this.props.loginAction();

    }
    render() {
        const { login,loginAction } = this.props;
        return (
            <div className="header-wrap">
                <div className="header">
                    <span className="logo">demo</span>
                    <ul className="menu">
                        <li><Link  to="index" activeClassName='active'>首页</Link></li>
                        <li><Link to="optimize" activeClassName='active'>优化</Link></li>
                        <li><Link to="report" activeClassName='active'>报告</Link></li>
                        <li><Link to="tool" activeClassName='active'>工具</Link></li>
                    </ul>
                    <div  className="right" style={{marginRight: 0}}>
                        <div className="login-name" >
                            <span >
                                {login.name}
                            </span>
                        </div>
                        <div className="login-action" >
                            <span onClick = { ()=>loginAction(login.status) }>{login.status}</span>
                        </div>
                    </div>
                    <div className="right">
                        <em>arch. with</em>PC-react
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
