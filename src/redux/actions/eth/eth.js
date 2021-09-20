import * as constants from './constants';

export const createETHWallet = (data) => async dispatch => {
  try {
    dispatch({ type: constants.SET_ETH_LOADING });
    dispatch({ type: constants.CREATE_NEW_ETH_WALLET_SUCCESS , payload : data });

 
  } catch (err) {
    console.log('🚀 ~ file: user.js ~ line 14 ~ err', err);
    dispatch({
      type: constants.CREATE_NEW_ETH_WALLET_FAIL,
      payload: err.response.data.error,
    });
  }
};