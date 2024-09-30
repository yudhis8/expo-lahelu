import {TopicsResponse, types, URL_TOPIC} from '../../constants/Topic.constant';
import {Dispatch} from '@reduxjs/toolkit';
import {httpRequest} from '../../helpers/api';
import {sprintf} from 'sprintf-js';
import {TopicAction} from '../reducers/Topic.reducer';

export const topicAction = (action: string) => {
  return async (dispatch: Dispatch<TopicAction>) => {
    dispatch({type: types.GET_TOPIC_REQUEST, data: {} as TopicsResponse});

    httpRequest('get', sprintf(URL_TOPIC, {params: action}), {})
      .then(response => {
        const {data} = response;
        dispatch({type: types.GET_TOPIC_SUCCESS, data: data});
      })
      .catch(error => {
        dispatch({
          type: types.GET_TOPIC_FAILED,
          message: error.message,
          data: {} as TopicsResponse,
        });
      });
  };
};

export const homeReset = () => {
  return async (dispatch: Dispatch<TopicAction>) => {
    dispatch({type: types.GET_TOPIC_RESET, data: {} as TopicsResponse});
  };
};
