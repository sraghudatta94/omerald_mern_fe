import { topicType } from '../types/topic';

const topicActionCreator = {
  setTopics: function (
    dispatch: (arg0: { type: string; payload: any }) => void,
    data: any
  ) {
    dispatch({ type: topicType.setTopics, payload: data });
  },
};

export default topicActionCreator;
