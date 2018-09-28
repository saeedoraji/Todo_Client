import React from 'react';
import {Col, Row} from 'antd';
import './topbar.css';


export default props => (
  <div className={props.className || 'layoutWrapper'}>
    <Row>
      <Col span={24}>
        {props.children}
      </Col>
    </Row>
  </div>
)
