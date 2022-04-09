import { bannerType } from '../types/banner';

const bannerActionCreator = {
  setbanners: function (
    dispatch: (arg0: { type: string; payload: any }) => void,
    data: any
  ) {
    dispatch({ type: bannerType.addBanner, payload: data });
  },
};

export default bannerActionCreator;
