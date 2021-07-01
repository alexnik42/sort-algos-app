import { connect } from "react-redux";
import {
  changeArraySize,
  changeSortingSpeed,
  generateNewArray,
  setSortingActive,
  setSortingInActive,
} from "redux/actions/actions";
import { bubbleSort } from "algorithms/bubbleSort";
import { insertionSort } from "algorithms/insertionSort";
import { mergeSort } from "algorithms/mergeSort";
import Toolbar from "./Toolbar";

const mapStateToProps = (state) => {
  return {
    array: state.arrayProperties.array,
    size: state.arrayProperties.size,
    isSortRunning: state.arrayProperties.isSortRunning,
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
  setSortingActive: () => {
    dispatch(setSortingActive());
  },
  setSortingInActive: () => {
    dispatch(setSortingInActive());
  },
  bubbleSort: async (array, speed) => {
    await bubbleSort(dispatch, array, speed);
  },
  insertionSort: async (array, speed) => {
    await insertionSort(dispatch, array, speed);
  },
  mergeSort: async (array, speed) => {
    await mergeSort(dispatch, array, speed);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);
