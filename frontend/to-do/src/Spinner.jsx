import React from 'react';
import { Space, Spin } from 'antd';
import "./spinner.scss"

const Spinner = () => (
    <div className='spinner'>
  <Space size="large"  >
    <Spin size="large"/>
  </Space>
  </div>
);

export default Spinner;