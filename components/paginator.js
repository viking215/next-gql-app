import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Pagination } from 'antd';

ReactDOM.render(<Pagination defaultCurrent={6} total={500} />, document.getElementById('container'));