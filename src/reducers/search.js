import { SEARCH_SUCCESS } from '../actions/search';

const initialState = {
  results: []
};

function searchResultTranformer(raw) {
  const { images } = raw;
  return {
    thumbnail: images.fixed_height_small_still.url,
    full: images.original.url
  };
}

export default (state, action) => {
  if (state === undefined) {
    return initialState;
  }

  switch (action.type) {
    case SEARCH_SUCCESS:
      return { ...state, results: action.results.map(searchResultTranformer) };
    default:
      return state;
  }
};
