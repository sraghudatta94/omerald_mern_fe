import { userType } from '../../types/users';

interface StateType {
  [key: string]: any;
}

export default function userReducer(
  state: StateType = { error: null },
  action: { type: any; payload: any }
): any {
  switch (action.type) {
    case userType.setUsers:
      state.data = action.payload;
      state.type = userType.setUsers;
      return {
        ...state,
      };

    default:
      return state;
  }
}
