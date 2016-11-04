/*
* @Author: xiongsheng
* @Date:   2016-09-28 10:52:12
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-11-01 10:37:11
*/

'use strict';
import React from 'react';
import { Route, IndexRedirect} from 'react-router';

import App from '../component/App';
import Home from '../component/content/Home/Home';
import Optimize from '../component/content/Optimize';
import Report from '../component/content/Report';
import Tool from '../component/content/Tool';
import Group from '../component/content/Home/Group';
import Plan from '../component/content/Home/Plan';
import Style from '../component/content/Home/Style';
import KeyWord from '../component/content/Home/KeyWord';

//react router，具体见
//http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu
export default (
    <Route path="/" component={App}  >
        <IndexRedirect  to="/index/group" />
        <Route path="/index" component={Home} >
            <IndexRedirect  to="/index/group" />
            <Route path="group" component={Group} />
            <Route path="plan" component={Plan} />
            <Route path="style" component={Style} />
            <Route path="keyWord" component={KeyWord} />
        </Route>
        <Route path="/optimize" component={Optimize} />
        <Route path="/report" component={Report} />
        <Route path="/tool" component={Tool} />
    </Route>
);


