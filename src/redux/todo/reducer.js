import {
  TODO_ADD,
  TODO_ADD_FAIL,
  TODO_ADD_SUCCESS,

  TODO_EDIT,
  TODO_EDIT_FAIL,
  TODO_EDIT_SUCCESS,

  TODO_DELETE,
  TODO_DELETE_FAIL,
  TODO_DELETE_SUCCESS,

  TODO_GET,
  TODO_GET_FAIL,
  TODO_GET_SUCCESS
} from './actions';

const initialState = {
  loadingTodoAdd: false,
  loadingTodoEdit: false,
  loadingTodoAddFail: false,
  loadingTodoEditFail: false,
  loadingTodoDeleteFail: false,

  todos: [],
  todoAddData: {},
  todoEditData: {},
  todoDeleteData: {}
}

export default function todoReducer(state = initialState, action = {}) {
  switch(action.type) {
    case TODO_ADD:
      return {
        ...state,
        loadingTodoAdd: true
      }
      break;
    case TODO_ADD_SUCCESS:
      return {
        ...state,
        todoAddData: action.data,
        loadingTodoAddFail: false
      }
      break;
    case TODO_ADD_FAIL:
      return {
        ...state,
        todoAddData: action.data,
        loadingTodoAddFail: true
      }
      break;

    case TODO_EDIT:
      return {
        ...state,
        loadingTodoEdit: true
      }
      break;
    case TODO_EDIT_SUCCESS:
      return {
        ...state,
        todoEditData: action.data,
        loadingTodoEditFail: false
      }
      break;
    case TODO_EDIT_FAIL:
      return {
        ...state,
        todoEditData: action.data,
        loadingTodoEditFail: true
      }
      break;

    case TODO_DELETE:
      return {
        ...state,
        loadingTodoDelete: true
      }
      break;
    case TODO_DELETE_SUCCESS:
      // state.todos.splice(state.todos.findIndex(item => item.id == action.id), 1);
      return {
        ...state,
        todoDeleteData: action.data,
        loadingTodoDeleteFail: false,
        todos: state.todos.filter(item => item.id !== action.id)
      }
      break;
    case TODO_DELETE_FAIL:
      return {
        ...state,
        todoDeleteData: action.data,
        loadingTodoDeleteFail: true
      }
      break;

    case TODO_GET:
      return {
        ...state,
        loadingTodoAdd: true
      }
      break;
    case TODO_GET_SUCCESS:
      return {
        ...state,
        todos: action.data && action.data.data && action.data.data.todos || [],
        loadingTodoAddFail: false
      }
      break;
    case TODO_GET_FAIL:
      return {
        ...state,
        loadingTodoAddFail: true
      }
      break;
    default:
      return initialState;
  }
}
