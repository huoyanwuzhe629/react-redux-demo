/*
* @Author: xiongsheng
* @Date:   2016-09-28 10:52:12
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-19 15:52:19
*/

'use strict';
import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Home from './components/contents/Home/Home';

export default (
    <Route  component={App}  >
        <Route path="/" component={Home} />
    </Route>
);


