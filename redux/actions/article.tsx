import { articleType } from '../types/article';

const articleActionCreator = {
  addArticle: function (
    dispatch: (arg0: { type: string; payload: any }) => void,
    data: any
  )
  {
    dispatch({ type: articleType.addArticle, payload: data });
  },
};

export default articleActionCreator;
