import * as ethConstants from '../actions/eth/constants';

const iniitialState = {
  loading: false,
  eth: null
};

export const Eth = (state = iniitialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case ethConstants.SET_ETH_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ethConstants.CREATE_NEW_ETH_WALLET_SUCCESS:
      return {
        ...state,
        loading: false,
        eth: payload
      }


    default:
      return state;
  }
};
