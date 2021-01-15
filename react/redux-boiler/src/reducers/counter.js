import { INCREMENT, DECREMENT } from "../reduxTypes";

const initialState = {
  value: 0,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + payload,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - payload,
      };
    default:
      return state;
  }
}
