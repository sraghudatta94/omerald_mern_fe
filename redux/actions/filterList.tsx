import { filterListType } from '../types/filterList';

const filterListActionCreator = {
  addfilterList: function (
    dispatch: (arg0: { type: string; payload: any }) => void,
    data: any
  ) {
    dispatch({ type: filterListType.setFilterList, payload: data });
  },
};

export default filterListActionCreator;
