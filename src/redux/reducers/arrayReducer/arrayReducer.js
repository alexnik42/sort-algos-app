import {
  CHANGE_ARRAY_SIZE,
  SET_NEW_ARRAY,
  GENERATE_NEW_ARRAY,
} from "redux/types/types";
import { DEFAULT_RANGE, DEFAULT_SIZE } from "utils/constants";

const initialState = {
  array: Array.from({ length: DEFAULT_SIZE }, () => {
    return {
      val: Math.floor(Math.random() * DEFAULT_RANGE),
      status: "notSorted",
    };
  }),
  size: DEFAULT_SIZE,
};

export const arrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_NEW_ARRAY:
      return {
        ...state,
        array: Array.from({ length: action.payload }, () => {
          return {
            val: Math.floor(Math.random() * DEFAULT_RANGE),
            status: "notSorted",
          };
        }),
      };
    case SET_NEW_ARRAY:
      return {
        ...state,
        array: action.payload,
      };
    case CHANGE_ARRAY_SIZE:
      return {
        ...state,
        array: Array.from({ length: action.payload }, () => {
          return {
            val: Math.floor(Math.random() * DEFAULT_RANGE),
            status: "notSorted",
          };
        }),
      };
    default:
      return state;
  }
};
