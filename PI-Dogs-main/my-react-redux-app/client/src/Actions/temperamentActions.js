// temperamentActions.js
export const FETCH_TEMPERAMENTS_SUCCESS = 'FETCH_TEMPERAMENTS_SUCCESS';

export const fetchTemperamentsSuccess = (temperaments) => {
  return {
    type: FETCH_TEMPERAMENTS_SUCCESS,
    temperaments,
  };
};
