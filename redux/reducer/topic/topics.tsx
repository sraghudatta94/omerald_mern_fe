import { topicType } from '../../types/topic';

interface StateType {
  [key: string]: any;
}

export default function topicReducer(
  state: StateType = { error: null },
  action: { type: any; payload: any }
): any {
  switch (action.type) {
    case topicType.setTopics:
      state.data = action.payload;
      state.type = topicType.setTopics;
      return {
        ...state,
      };

    default:
      return state;
  }
}
