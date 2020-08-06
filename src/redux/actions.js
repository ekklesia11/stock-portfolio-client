// action types

export const SET_EPS = "SET_EPS";
export const ADD_PER = "ADD_PER";
export const RESET_PER = "RESET_PER";

// action creator

export const setEPS = (value) => ({ type: SET_EPS, payload: value });

export const addPER = (value) => ({ type: ADD_PER, payload: value });

export const resetPER = () => ({ type: RESET_PER });
