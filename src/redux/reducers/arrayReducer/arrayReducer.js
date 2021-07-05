import {
  CHANGE_ARRAY_SIZE,
  SET_NEW_ARRAY,
  GENERATE_NEW_ARRAY,
  SET_SORTING_ACTIVE,
  SET_SORTING_INACTIVE,
} from "redux/types/types";
import {
  DEFAULT_RANGE_MAX,
  DEFAULT_RANGE_MIN,
  DEFAULT_SIZE,
} from "utils/constants";
import { getRandomIntInclusive } from "utils/utils";

const initialState = {
  array: Array.from({ length: DEFAULT_SIZE }, () => {
    return {
      val: getRandomIntInclusive(DEFAULT_RANGE_MIN, DEFAULT_RANGE_MAX),
      status: "not-sorted",
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
            val: getRandomIntInclusive(DEFAULT_RANGE_MIN, DEFAULT_RANGE_MAX),
            status: "not-sorted",
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
            val: getRandomIntInclusive(DEFAULT_RANGE_MIN, DEFAULT_RANGE_MAX),
            status: "not-sorted",
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
