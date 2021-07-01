import { connect } from "react-redux";
import {
  changeArraySize,
  changeSortingSpeed,
  generateNewArray,
} from "redux/actions/actions";
import { bubbleSort } from "algorithms/bubbleSort";
import { insertionSort } from "algorithms/insertionSort";
import { mergeSort } from "algorithms/mergeSort";
import Toolbar from "./Toolbar";

const mapStateToProps = (state) => {
  return {
    array: state.arrayProperties.array,
    size: state.arrayProperties.size,
    speed: state.speedProperties.speed,
  };
};

const mapDispatchToProps = () => (dispatch) => ({
  generateNewArray: (size) => {
    dispatch(generateNewArray(size));
  },
  changeArraySize: (size) => {
    dispatch(changeArraySize(size));
  },
  changeSortingSpeed: (speed) => {
    dispatch(changeSortingSpeed(speed));
  },
  bubbleSort: (array, speed) => {
    bubbleSort(dispatch, array, speed);
  },
  insertionSort: (array, speed) => {
    insertionSort(dispatch, array, speed);
  },
  mergeSort: (array, speed) => {
    mergeSort(dispatch, array, speed);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
