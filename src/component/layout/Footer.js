/*
* @Author: xiongsheng
* @Date:   2016-10-18 16:12:25
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-18 16:15:47
*/

'use strict';

import React, { Component, PropTypes } from 'react'

class Footer extends Component {
    render() {
        const { } = this.props;
        return (
            <div className="footer-wrap">
                <div className="footer">
                    <div className="logo">design by @bizdev_fe Copyright© 2016</div>
                    <div className="right">
                        <ul>
                            <li><span>FE</span></li>
                            <li><a href="javascript:;">Blog</a></li>
                            <li><a href="javascript:;">NPM</a></li>
                            <li><a href="javascript:;">BizGallery</a></li>
                            <li><a href="javascript:;">BizUI</a></li>
                        </ul>
                        <ul>
                            <li><span>BizTech</span></li>
                            <li><a href="javascript:;">Bizwork</a></li>
                            <li><a href="javascript:;">PMS</a></li>
                            <li><a href="javascript:;">BizTask</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        )
    }
}

export default Footer
