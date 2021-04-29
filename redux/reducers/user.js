import { CLEAR_DATA, USER_STATE_CHANGE } from "../constants";

const inititalState = {
  currentUser: null,
};

export const user = (state = inititalState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return {
        ...state,
        currentUser: action.currentUser,
      }
    case CLEAR_DATA:
        return inititalState
    default:
        return state
  }
};
