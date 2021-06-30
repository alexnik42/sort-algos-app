import {
  CHANGE_ARRAY_SIZE,
  CHANGE_SORTING_SPEED,
  GENERATE_NEW_ARRAY,
  SET_NEW_ARRAY,
} from "redux/types/types";

export function generateNewArray(size) {
  return {
    type: GENERATE_NEW_ARRAY,
    payload: size,
  };
}

export function setNewArray(array) {
  return {
    type: SET_NEW_ARRAY,
    payload: array,
  };
}

export function changeArraySize(size) {
  return {
    type: CHANGE_ARRAY_SIZE,
    payload: size,
  };
}

export function changeSortingSpeed(speed) {
  return {
    type: CHANGE_SORTING_SPEED,
    payload: speed,
  };
}
