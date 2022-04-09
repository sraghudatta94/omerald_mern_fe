import { combineReducers } from 'redux';
import articleReducer from './article/article';
import authorReducer from './author/author';
import bannerReducer from './banner/banner';
import filterListReducer from './article copy/article';
import topicReducer from './topic/topics';
import userReducer from './users';

const reducer = combineReducers({
  article: articleReducer,
  author: authorReducer,
  topics: topicReducer,
  users: userReducer,
  banners: bannerReducer,
  filterList: filterListReducer,
});

export default reducer;
