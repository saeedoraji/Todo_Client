import { all } from 'redux-saga/effects';
import todoSagas from './todo/saga';


export default function* rootSaga() {
  yield all([
    todoSagas()
  ]);
}
