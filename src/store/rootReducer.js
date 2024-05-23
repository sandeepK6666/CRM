import { combineReducers } from '@reduxjs/toolkit';
import candidateReducer from '../store/reducers/candidateReducers';
import todoReducers from './reducers/todoReducers';

const initialState ={}

const appReducer = combineReducers({
  candidate: candidateReducer,
  todo: todoReducers,
});

export default function rootReducer(state, action) {
  let appState = state;
  if (action.type === 'logout') {
    appState = initialState;
  }
  return appReducer(appState, action);
}
