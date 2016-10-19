/*
* @Author: xiongsheng
* @Date:   2016-09-27 16:23:31
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-19 15:50:54
*/

'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as TotalActions from '../../redux/actions';

@connect(
  state => ({
    login: state.default.login,
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
                    <div  className="header-right" style={{marginLeft:'10px'}}>
                        <div className="login-name" >
                            <span >
                                {login.name}
                            </span>
                        </div>
                        <div className="login-action" >
                            <span onClick = { ()=>loginAction(login.status) }>{login.status}</span>
                        </div>
                    </div>
                    <div className="header-right">
                        <em>arch. with</em>PC-react
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
