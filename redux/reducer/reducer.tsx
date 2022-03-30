import { combineReducers } from 'redux';
import articleReducer from './article/article';
import authorReducer from './author/author';
import topicReducer from './topic/topics';

const reducer = combineReducers({
  article: articleReducer,
  author: authorReducer,
  topics: topicReducer,
});

export default reducer;
