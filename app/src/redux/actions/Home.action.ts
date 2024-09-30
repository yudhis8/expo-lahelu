import {HomeResponse, types, URL_HOME} from '../../constants/Home.constant';
import {Dispatch} from '@reduxjs/toolkit';
import {httpRequest} from '../../helpers/api';
import {sprintf} from 'sprintf-js';
import {HomeAction} from '../reducers/Home.reducer';

export const homeAction = (action: string) => {
  return async (dispatch: Dispatch<HomeAction>) => {
    dispatch({type: types.GET_HOME_REQUEST, data: {} as HomeResponse});

    httpRequest('get', sprintf(URL_HOME, {params: action}), {})
      .then(response => {
        const {data} = response;

        if (action.includes('feed=0')) return dispatch({type: types.GET_FRESH_SUCCESS, data: data});
        if (action.includes('feed=1')) return dispatch({type: types.GET_HOME_SUCCESS, data: data});
        if (action.includes('feed=2')) return dispatch({type: types.GET_TRENDING_SUCCESS, data: data});
      })
      .catch(error => {
        dispatch({
          type: types.GET_HOME_FAILED,
          message: error.message,
          data: {} as HomeResponse,
        });
      });
  };
};

export const homeReset = () => {
  return async (dispatch: Dispatch<HomeAction>) => {
    dispatch({type: types.GET_HOME_RESET, data: {} as HomeResponse});
  };
};
