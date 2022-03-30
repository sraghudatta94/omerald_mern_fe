import { authorType } from '../../types/author';

interface StateType {
  [key: string]: any;
}

export default function authorReducer(
  state: StateType = { error: null },
  action: { type: any; payload: any }
): any {
  switch (action.type) {
    case authorType.setAuthors:
      state.data = action.payload;
      state.type = authorType.setAuthors;
      return {
        ...state,
      };

    default:
      return state;
  }
}
