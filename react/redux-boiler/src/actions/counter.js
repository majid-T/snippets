const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

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
