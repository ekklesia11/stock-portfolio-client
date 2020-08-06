// action types

export const SET_EPS = "SET_EPS";
export const ADD_PER = "ADD_PER";

// action creator

export const setEPS = (value) => ({ type: SET_EPS, payload: value });

export const addPER = (value) => ({ type: ADD_PER, payload: value });
