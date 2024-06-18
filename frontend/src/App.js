import logo from './logo.svg';
import './App.css';
import MainPage from "./page/MainPage";
import WebNavigation from "./navigation/WebNavigation";

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

import authReducer from './stores/reducers/auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <WebNavigation/>
    </Provider>
  );
}

export default App;
