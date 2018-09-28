// import React, { Component } from 'react';
// import AddContainer from './containers/todo/add';
// import './App.css';
//
// class App extends Component {
//   render() {
//     return (
//       <AddContainer />
//     );
//   }
// }
//
// export default App;

import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import PublicRoutes from './router';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PublicRoutes history={history} />
      </Provider>
    )
  }
}
