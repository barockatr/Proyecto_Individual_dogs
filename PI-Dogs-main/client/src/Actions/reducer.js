// someReducer.js
import { FETCH_TEMPERAMENTS_SUCCESS } from '../actions/temperamentActions';

const initialState = {
  // Tu estado inicial aquí
  temperaments: [],
};

const someReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TEMPERAMENTS_SUCCESS:
      return {
        ...state,
        temperaments: action.temperaments,
      };
    // Otras lógicas de tu reducer
    default:
      return state;
  }
};

export default someReducer;
