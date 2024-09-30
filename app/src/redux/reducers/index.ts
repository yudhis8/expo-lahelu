import {combineReducers} from '@reduxjs/toolkit';
import home from './Home.reducer';
import auth from './Auth.reducer';
import topic from './Topic.reducer';

const rootReducer = combineReducers({
  home,
  auth,
  topic,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
