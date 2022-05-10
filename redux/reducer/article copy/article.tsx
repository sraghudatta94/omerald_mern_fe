import { filterListType } from '../../types/filterList';

interface StateType {
  [key: string]: any;
}

export default function filterListReducer(
  state: StateType = { error: null },
  action: { type: any; payload: any }
): any {
  switch (action.type) {
    case filterListType.setFilterList:
      state.data = action.payload;
      state.type = filterListType.setFilterList;
      return {
        ...state,
      };

    default:
      return state;
  }
}
