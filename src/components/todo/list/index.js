import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTodos, todoEdit, todoDelete } from '../../../redux/todo/actions';
import { List, Row, Col, Input, Icon, Button } from 'antd';
import TopBar from '../../layout/topBar/topBar';
import Layout from '../../layout/layout/layout';
import Sort from './listComponents/sort';
import TodoDate from './listComponents/todoDate';
import TodoPriority from './listComponents/todoPriority';
import {dateFormat} from '../../../helpers/dateHelper';
import moment from 'moment';

class TodoListComponent extends Component {
  sortDir = "asc";
  constructor(props) {
    super(props);

    const {getTodos} = this.props;
    getTodos({sortValue: 'name', sortDir: 'asc'});

  }

  sort = (sortValue) => {
    const {getTodos} = this.props;
    getTodos({sortValue: sortValue.target.value, sortDir: this.sortDir});
    if (this.sortDir == "asc") {
      this.sortDir = 'desc';
    } else {
      this.sortDir = 'asc';
    }

  }

  onChangeDate = (id, date) => {
    this.updateTodo({id, date: moment(date).format(dateFormat)});
  }

  onChangePriority = (id, priority) => {
    this.updateTodo({id, priority});
  }

  updateTodo = (data) => {
    const {todoEdit} = this.props;
    todoEdit(data)
  }

  deleteTask = (id) => {
    const {todoDelete} = this.props;
    todoDelete(id);
  }

  render() {
    const {todos} = this.props;

    let rows = todos.map((item) => {
      return <Row style={{width: '100%', textAlign:'center'}} key={item.id}>
            <Col span={10}><Input defaultValue={item.name} onKeyPress={(event) => {if ((event.which || event.keyCode) == 13) this.updateTodo({id: item.id, name: event.target.value})}}/></Col>
            <Col span={6}><TodoDate onChangeDate={this.onChangeDate} date={item.date} id={item.id} /></Col>
            <Col span={4}><TodoPriority priority={item.priority} onChangePriority={this.onChangePriority} id={item.id} /></Col>
            <Col style={{cursor:'pointer'}} onClick={() => this.deleteTask(item.id)} span={2}><Icon type="close" /></Col>
          </Row>
    })
    return (
      <Layout>
      <Link to="/add">
        <Button type="primary">Add New Task</Button>
      </Link>

        <TopBar>
          <h2>Todo List</h2>
        </TopBar>

        <Row>
          <Col span={24}>
            <Sort sort={this.sort} />
          </Col>
          <Col span={24}>

            {rows}
          </Col>
        </Row>
      </Layout>
    )
  }
}

export default connect(state => ({
  todos: state.Todo.todos
}), { getTodos, todoEdit, todoDelete }
)(TodoListComponent)
