import { userType } from '../types/users';

const userActionCreator = {
  setUsers: function (
    dispatch: (arg0: { type: string; payload: any }) => void,
    data: any
  ) {
    dispatch({ type: userType.setUsers, payload: data });
  },
};

export default userActionCreator;
