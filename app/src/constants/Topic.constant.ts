export const URL_TOPIC = '/api/topic/get-topics?%(params)s';

export const types = {
  GET_TOPIC_REQUEST: 'GET_TOPIC_REQUEST',
  GET_TOPIC_SUCCESS: 'GET_TOPIC_SUCCESS',
  GET_TOPIC_FAILED: 'GET_TOPIC_FAILED',
  GET_TOPIC_RESET: 'GET_TOPIC_RESET',
};

export type TopicActionTypes = keyof typeof types;

export interface TopicInfos {
  topicID: string;
  userID: string;
  title: string;
  media: string;
  totalMembers: number;
  createTime: number;
  searchVector: string;
  description: string;
  totalCoins: number;
  activeTime: number;
  userUsername: string;
  userAvatar: string | null;
  userFrame: string | null;
  userPrivilege: number;
  userPlusTime: number;
}

export interface TopicsResponse {
  topicInfos: TopicInfos[];
  nextPage: number;
  hasMore: boolean;
}
