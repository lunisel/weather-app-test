import { initialState } from "..";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER_NAME":
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.payload,
        },
      };
    case "ADD_CITY":
      return {
        ...state,
        user: {
          ...state.user,
          cities: [...state.user.cities, action.payload],
        },
      };
    default:
      return state;
  }
};

export default mainReducer;
