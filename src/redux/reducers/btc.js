import * as btcConstants from '../actions/btc/constants';

const iniitialState = {
  loading: false,
  btc : null
};

export const Btc = (state = iniitialState, action) => {
  const {type, payload} = action;
  switch (action.type) {
    case btcConstants.SET_BTC_LOADING:
      return {
        ...state,
        loading: true,
      };
    case btcConstants.CREATE_NEW_BTC_WALLET_SUCCESS:

    return{
        ...state,
        loading : false,
        btc : payload
    }
    

    default:
      return state;
  }
};
