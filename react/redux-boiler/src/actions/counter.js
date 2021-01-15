import { INCREMENT, DECREMENT } from "../reduxTypes";

export const addOne = () => (dispatch) => {
  dispatch({
    type: INCREMENT,
    payload: 1,
  });
};

export const minusOne = () => (dispatch) => {
  dispatch({
    type: DECREMENT,
    payload: 1,
  });
};
