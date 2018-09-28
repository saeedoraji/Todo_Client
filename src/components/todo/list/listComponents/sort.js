import React, {Component} from 'react';
import {Row, Col, Radio} from 'antd';

export default class Sort extends Component {
  render() {
    return (
      <Row>
        <Col span={24}>
          Sort By:&nbsp;&nbsp;
          <Radio.Group onChange={this.props.sort}>
            <Radio.Button value="name">Name</Radio.Button>
            <Radio.Button value="date">Due Date</Radio.Button>
            <Radio.Button value="priority">Priority</Radio.Button>
          </Radio.Group>
        </Col>
      </Row>
    )
  }
}
