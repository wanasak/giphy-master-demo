export const SEARCH = 'SEARCH';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAIL = 'SEARCH_FAIL';

export const searchError = () => ({ type: SEARCH_FAIL });
export const search = term => ({ type: SEARCH, term });
export const searchSuccess = results => ({ type: SEARCH_SUCCESS, results });
