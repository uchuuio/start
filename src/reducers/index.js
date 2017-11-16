import { combineReducers } from 'redux';

import groupReducer from './groups';
import settingReducer from './settings';

const reducers = combineReducers({
    settings: settingReducer,
    groups: groupReducer,
});

export default reducers;