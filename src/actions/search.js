export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const NEW_SEARCH = 'NEW_SEARCH';

export const searchError = () => ({ type: SEARCH_FAIL });
export const newSearch = term => ({ type: NEW_SEARCH, term });
export const search = () => ({ type: SEARCH });
export const searchSuccess = results => ({ type: SEARCH_SUCCESS, results });
