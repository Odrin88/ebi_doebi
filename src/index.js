import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../src/assets/styles.scss';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./Redux/reducer/combainerReducer";


const store = createStore(rootReducer);

ReactDOM.render(
      <Provider store={store}>
          <App />
      </Provider>,
  document.getElementById('root')
);
