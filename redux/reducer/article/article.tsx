import { articleType } from '../../types/article';

interface StateType {
  [key: string]: any;
}

export default function articleReducer(
  state: StateType = { error: null },
  action: { type: any; payload: any }
): any {
  switch (action.type) {
    case articleType.addArticle:
      state.data = action.payload;
      state.type = articleType.addArticle;
      return {
        ...state,
      };

    default:
      return state;
  }
}
