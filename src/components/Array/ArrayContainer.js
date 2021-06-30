import { connect } from "react-redux";
import Array from "./Array";

const mapStateToProps = (state) => {
  return {
    array: state.arrayProperties.array,
  };
};

export default connect(mapStateToProps, null)(Array);
