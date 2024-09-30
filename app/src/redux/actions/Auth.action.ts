import {types} from '../../constants/Auth.constant';
import {Dispatch} from '@reduxjs/toolkit';
import {AuthAction} from '../reducers/Auth.reducer';

export const setAuth = () => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({type: types.SET_AUTH_SUCCESS, data: true});
  };
};

export const setModal = (data: boolean) => {
  return async (dispatch: Dispatch<AuthAction>) => {
    dispatch({type: types.SET_AUTH_MODAL, data: data});
  };
};
