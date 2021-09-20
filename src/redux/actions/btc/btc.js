import * as constants from './constants';

export const createBTCWallet = (data) => async dispatch => {
  try {
    dispatch({ type: constants.SET_BTC_LOADING });
    dispatch({ type: constants.CREATE_NEW_BTC_WALLET_SUCCESS , payload : data });

 
  } catch (err) {
    console.log('🚀 ~ file: user.js ~ line 14 ~ err', err);
    dispatch({
      type: constants.CREATE_NEW_BTC_WALLET_FAIL,
      payload: err.response.data.error,
    });
  }
};