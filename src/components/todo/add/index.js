import React, {Component} from 'react';
import {Col, Row, Input, Button} from 'antd';
import TopBar from '../../layout/topBar/topBar';
import Layout from '../../layout/layout/layout';
import { connect } from 'react-redux';
import { todoAdd } from '../../../redux/todo/actions';
import {todo} from '../../../helpers/todo';
import { Link } from 'react-router-dom';


class AddComponent extends Component {
  constructor(props) {
    super(props);
  }

  addTodo = (event) => {
    if ((event.which || event.keyCode) == 13) {
      const {todoAdd} = this.props;
      todoAdd({name: document.getElementById('description').value, priority: todo.default.priority, date: todo.default.date})
    }
  }

  render() {
    return (
      <Layout>
        <Link to="/">
          <Button type="primary">Task List</Button>
        </Link>
        <TopBar>
          <h2>
            Add Todo
          </h2>
        </TopBar>
        <Row>
          <Col span={24}>
            <Input id="description" placeholder="put task description" onKeyPress={(e) => {this.addTodo(e)}} />
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default connect(state => ({
    todoAddData: state.Todo.todoAddData,
  }),
  { todoAdd }
)(AddComponent)
