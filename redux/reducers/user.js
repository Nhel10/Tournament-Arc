import { CLEAR_DATA, USER_PROFILE_STATE_CHANGE, USER_STATE_CHANGE } from "../constants";

const inititalState = {
  currentUser: null,
  userProfile: []
}

export const user = (state = inititalState, action) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return {
        ...state,
        currentUser: action.currentUser,
      }

    case USER_PROFILE_STATE_CHANGE:
      return{
        ...state,
        userProfile: action.userProfile
      }
    case CLEAR_DATA:
        return inititalState
    default:
        return state
  }
};
