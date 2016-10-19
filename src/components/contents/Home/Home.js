/*
* @Author: xiongsheng
* @Date:   2016-10-19 14:11:51
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-19 15:49:55
*/

'use strict';

import React, { Component} from 'react';
import Query from './Query';
import ResultTable from './ResultTable';

class Home extends Component {
    render() {
        return (
            <div>
                <Query />
                <ResultTable />
            </div>
        );
    }
}

export default Home
