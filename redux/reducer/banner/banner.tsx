import { bannerType } from '../../types/banner';

interface StateType {
  [key: string]: any;
}

export default function bannerReducer(
  state: StateType = { error: null },
  action: { type: any; payload: any }
): any {
  switch (action.type) {
    case bannerType.addBanner:
      state.data = action.payload;
      state.type = bannerType.addBanner;
      return {
        ...state,
      };

    default:
      return state;
  }
}
