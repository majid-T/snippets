import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addOne, minusOne } from "../actions/counter";

const Counter = ({ value, addOne, minusOne }) => {
  return (
    <>
      <p>{value}</p>
      <div>
        <span className="btn" onClick={addOne}>
          +
        </span>
        <span className="btn" onClick={minusOne}>
          -
        </span>
      </div>
    </>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
  addOne: PropTypes.func,
  minusOne: PropTypes.func,
};

const mapStateToProps = (state) => ({
  value: state.counter.value,
});

export default connect(mapStateToProps, { addOne, minusOne })(Counter);
