import authReducer from './authReducer';
import projectreducer from './projectReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
    auth: authReducer,
    project: projectreducer
});

export default rootReducer;