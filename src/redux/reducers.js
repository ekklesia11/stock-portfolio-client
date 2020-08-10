import { setEPS, addPER, SET_EPS, ADD_PER, RESET_PER } from "./actions";

const initialState = {
  EPS: "",
  PER: [],
};

const stockApp = (state = initialState, action) => {
  switch (action.type) {
    case SET_EPS:
      return { ...state, EPS: action.payload };
    case ADD_PER:
      return { ...state, PER: [...state.PER, action.payload] };
    case RESET_PER:
      return { EPS: "", PER: [] };
    default:
      return state;
  }
};

export default stockApp;
