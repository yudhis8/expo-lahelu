import {types, TopicsResponse} from '../../constants/Topic.constant';

export interface TopicState {
  data?: TopicsResponse;
  fetching: boolean;
  error?: string | null;
}

export interface TopicAction {
  type: string;
  data: TopicsResponse;
  message?: string;
}

const initialState: TopicState = {
  data: {
    topicInfos: [],
    nextPage: 0,
    hasMore: false,
  },
  fetching: false,
  error: null,
};

const topic = (state = initialState, action: TopicAction): TopicState => {
  switch (action.type) {
    case types.GET_TOPIC_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.GET_TOPIC_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          topicInfos: [...(state.data?.topicInfos ?? []), ...(action.data?.topicInfos ?? [])],
          nextPage: action.data.nextPage,
          hasMore: action.data.hasMore,
        },
        fetching: false,
        error: null,
      };
    case types.GET_TOPIC_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.message || null,
      };

    case types.GET_TOPIC_RESET:
      return initialState;
    default:
      return state;
  }
};

export default topic;
