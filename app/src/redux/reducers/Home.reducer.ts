import {types, HomeResponse} from '../../constants/Home.constant';

export interface HomeState {
  data?: HomeResponse;
  fetching: boolean;
  error?: string | null;
}

export interface HomeAction {
  type: string;
  data: HomeResponse;
  message?: string;
}

const initialState: HomeState = {
  data: {
    postInfos: [],
    freshInfos: [],
    trendingInfos: [],
    nextPage: 0,
    hasMore: false,
  },
  fetching: false,
  error: null,
};

const home = (state = initialState, action: HomeAction): HomeState => {
  switch (action.type) {
    case types.GET_HOME_REQUEST:
      return {
        ...state,
        fetching: true,
        error: null,
      };
    case types.GET_HOME_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          postInfos: [...(state.data?.postInfos ?? []), ...(action.data?.postInfos ?? [])],
          freshInfos: state.data?.freshInfos ?? [],
          trendingInfos: state.data?.trendingInfos ?? [],
          nextPage: action.data.nextPage,
          hasMore: action.data.hasMore,
        },
        fetching: false,
        error: null,
      };
    case types.GET_FRESH_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          freshInfos: [...(state.data?.freshInfos ?? []), ...(action.data?.postInfos ?? [])],
          postInfos: state.data?.freshInfos ?? [],
          trendingInfos: state.data?.trendingInfos ?? [],
          nextPage: action.data.nextPage,
          hasMore: action.data.hasMore,
        },
        fetching: false,
        error: null,
      };
    case types.GET_TRENDING_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          trendingInfos: [...(state.data?.trendingInfos ?? []), ...(action.data?.postInfos ?? [])],
          postInfos: state.data?.trendingInfos ?? [],
          freshInfos: state.data?.freshInfos ?? [],
          nextPage: action.data.nextPage,
          hasMore: action.data.hasMore,
        },
        fetching: false,
        error: null,
      };
    case types.GET_HOME_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.message || null,
      };

    case types.GET_HOME_RESET:
      return initialState;
    default:
      return state;
  }
};

export default home;
