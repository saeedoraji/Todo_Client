import { all, takeEvery, put, fork, take } from 'redux-saga/effects';
import {message} from 'antd';
import {
  TODO_ADD_SUCCESS,
  TODO_EDIT_SUCCESS,
  TODO_DELETE_SUCCESS
} from './actions';

export function* todoAddSuccess() {
  while (true) {
    const { data } = yield take(TODO_ADD_SUCCESS);

    if (data) {
      message.success("The task was successfully added");
    } else {
      message.error("There is an error in add");
    }
  }
}

export function* todoEditSuccess() {
  while (true) {
    const { data } = yield take(TODO_EDIT_SUCCESS);

    if (data) {
      message.success("The task was successfully updated");
    } else {
      message.error("There is an error in update");
    }
  }
}

export function* todoDeleteSuccess() {
  while (true) {
    const { data } = yield take(TODO_DELETE_SUCCESS);

    if (data) {
      message.success("The task was successfully deleted");
    } else {
      message.error("There is an error in delete");
    }
  }
}



export default function* rootSaga() {
  yield all([
    fork(todoAddSuccess),
    fork(todoEditSuccess),
    fork(todoDeleteSuccess)
  ]);
}
