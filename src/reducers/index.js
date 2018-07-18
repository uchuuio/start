import { combineReducers } from 'redux';

import currencyReducer from './currency';
import groupReducer from './groups';
import settingReducer from './settings';

const reducers = combineReducers({
  settings: settingReducer,
  currency: currencyReducer,
  groups: groupReducer,
});

export default reducers;
