import React from 'react';

export default props => (
  <div className={props.className || 'layoutWrapper'}>
    <Row>
      <Col span={24}>
        {this.children}
      </Col>
    </Row>
  </div>
)
