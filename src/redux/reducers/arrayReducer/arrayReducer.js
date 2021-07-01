import {
  CHANGE_ARRAY_SIZE,
  SET_NEW_ARRAY,
  GENERATE_NEW_ARRAY,
  SET_SORTING_ACTIVE,
  SET_SORTING_INACTIVE,
} from "redux/types/types";
import { DEFAULT_RANGE, DEFAULT_SIZE } from "utils/constants";

const initialState = {
  array: Array.from({ length: DEFAULT_SIZE }, () => {
    return {
      val: Math.max(Math.floor(Math.random() * DEFAULT_RANGE), 1),
      status: "notSorted",
    };
  }),
  size: DEFAULT_SIZE,
  isSortRunning: false,
};

export const arrayReducer = (state = initialState, action) => {
  switch (action.type) {
    case GENERATE_NEW_ARRAY:
      return {
        ...state,
        array: Array.from({ length: action.payload }, () => {
          return {
            val: Math.max(Math.floor(Math.random() * DEFAULT_RANGE), 1),
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
            val: Math.max(Math.floor(Math.random() * DEFAULT_RANGE), 1),
            status: "notSorted",
          };
        }),
      };
    case SET_SORTING_ACTIVE:
      return {
        ...state,
        isSortRunning: true,
      };
    case SET_SORTING_INACTIVE:
      return {
        ...state,
        isSortRunning: false,
      };
    default:
      return state;
  }
};
