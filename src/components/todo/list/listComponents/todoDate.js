import React, {Component} from 'react';
import {Row, Col, Radio, DatePicker} from 'antd';
import moment from 'moment';

export default class TodoDate extends Component {
  render() {
    return (
      <div>
        <DatePicker onChange={(e) => {this.props.onChangeDate(this.props.id, e)}} defaultValue={moment(this.props.date)} />
      </div>
    )
  }
}
