import {combineReducers} from 'redux';
import {Auth} from './auth';
import {User} from './user';
import {Btc} from './btc';
import {Eth} from './eth';

const rootReducer = combineReducers({
  Auth,
  User,
  Btc,
  Eth,
});

export default (state, action) => rootReducer(state, action);
