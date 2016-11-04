/*
* @Author: xiongsheng
* @Date:   2016-10-19 14:11:51
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-26 20:25:41
*/

'use strict';

import React, { Component} from 'react';

import SubNav from './SubNav';

class Home extends Component {
    render() {
        const {children} = this.props;
        return (
            <div className="content">
                <SubNav />
                {children}
            </div>
        );
    }
}

export default Home
