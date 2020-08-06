import { setEPS, addPER, SET_EPS, ADD_PER, RESET_PER } from "./actions";

const initialState = {
  EPS: 0,
  PER: [],
};

const stockApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_EPS:
      return { ...state, EPS: action.payload };
    case ADD_PER:
      return { ...state, PER: [...state.PER, action.payload] };
    case RESET_PER:
      return { EPS: 0, PER: [] };
    default:
      return state;
  }
};

export default stockApp;
