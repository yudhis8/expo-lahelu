export const URL_HOME = '/api/post/get-posts?%(params)s';

export const types = {
  GET_HOME_REQUEST: 'GET_HOME_REQUEST',
  GET_HOME_SUCCESS: 'GET_HOME_SUCCESS',
  GET_HOME_FAILED: 'GET_HOME_FAILED',
  GET_HOME_RESET: 'GET_HOME_RESET',

  GET_FRESH_SUCCESS: 'GET_FRESH_SUCCESS',
  GET_TRENDING_SUCCESS: 'GET_TRENDING_SUCCESS',
};

export type HomeActionTypes = keyof typeof types;

export interface PostInfo {
  postID: string;
  userID: string;
  title: string;
  totalUpvotes: number;
  totalDownvotes: number;
  totalComments: number;
  createTime: number;
  feed: number;
  searchVector: string;
  mediaWidth: number;
  mediaHeight: number;
  media: string;
  mediaThumbnail: string | null;
  sensitive: boolean;
  mediaType: number;
  pinCommentID: string | null;
  hashtags: string[];
  totalCoins: number;
  ageTime: number;
  bindTopicID: string | null;
  userUsername: string;
  userAvatar: string | null;
  userFrame: string | null;
  userPrivilege: number;
  userPlusTime: number;
  topicTitle?: string;
}

export interface HomeResponse {
  postInfos: PostInfo[];
  freshInfos: PostInfo[];
  trendingInfos: PostInfo[];
  nextPage: number;
  hasMore: boolean;
}
