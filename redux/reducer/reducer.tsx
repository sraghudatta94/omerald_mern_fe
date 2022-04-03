import { combineReducers } from 'redux';
import articleReducer from './article/article';
import authorReducer from './author/author';
import topicReducer from './topic/topics';
import userReducer from './users';

const reducer = combineReducers({
  article: articleReducer,
  author: authorReducer,
  topics: topicReducer,
  users: userReducer,
});

export default reducer;
