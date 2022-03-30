import { authorType } from '../types/author';

const authorActionCreator = {
  setAuthor: function (
    dispatch: (arg0: { type: string; payload: any }) => void,
    data: any
  ) {
    dispatch({ type: authorType.setAuthors, payload: data });
  },
};

export default authorActionCreator;
