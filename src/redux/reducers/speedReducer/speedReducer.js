import { CHANGE_SORTING_SPEED } from "redux/types/types";
import { DEFAULT_SPEED } from "utils/constants";

const initialState = {
  speed: DEFAULT_SPEED,
};

export const speedReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SORTING_SPEED:
      return {
        ...state,
        speed: action.payload,
      };
    default:
      return state;
  }
};
