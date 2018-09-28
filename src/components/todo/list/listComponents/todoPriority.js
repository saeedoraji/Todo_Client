import React, {Component} from 'react';
import {Row, Col, Radio, Icon} from 'antd';
import {todo} from '../../../../helpers/todo';

export default class TodoPriority extends Component {
  state = {priority: ''}
  changePriority = (type) => {
    let increaser = todo.priorities.findIndex(item => item == this.getCurrentPriority());

    if (type == "up") {
      increaser++;
    }

    if (type == "down") {
      increaser--;
    }

    if (increaser == 3) {
      increaser = 0;
    }

    if (increaser == -1) {
      increaser = 2;
    }
    this.props.onChangePriority(this.props.id, todo.priorities[increaser]);
    this.setState({
      priority: todo.priorities[increaser]
    })
  }

  getCurrentPriority = () => {
    let {priority} = this.state
    if (!priority) {
      priority = this.props.priority;
    }
    return priority;
  }

  render() {
    let priority = this.getCurrentPriority();
    return (
      <div style={{textAlign: 'center'}}>
        <Row>
          <Col span={24}>
            <Icon style={{cursor: 'pointer'}} type="up" theme="outlined" onClick={(e) => {this.changePriority('up')}} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            {priority}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Icon style={{cursor: 'pointer'}} type="down" theme="outlined" onClick={(e) => {this.changePriority('down')}} />
          </Col>
        </Row>
      </div>
    )
  }
}
