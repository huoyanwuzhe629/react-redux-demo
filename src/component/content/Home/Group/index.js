/*
* @Author: xiongsheng
* @Date:   2016-10-26 19:33:25
* @Last Modified by:   xiongsheng
* @Last Modified time: 2016-10-26 19:40:18
*/

'use strict';
import React, { Component} from 'react';

import Query from './Query';
import ResultTable from './ResultTable';

class Group extends Component {
    render() {
        return (
            <div>
                <Query />
                <ResultTable />
            </div>
        );
    }
}

export default Group
