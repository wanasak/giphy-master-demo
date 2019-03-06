import { SEARCH_SUCCESS, NEW_SEARCH } from '../actions/search';

const initialState = {
  results: [],
  currentOffset: 0,
  searchTerm: null
};

function searchResultTranformer(raw) {
  const { images, id } = raw;
  return {
    id: id,
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
      return {
        ...state,
        currentOffset: state.currentOffset + 50,
        results: state.results.concat(
          action.results.map(searchResultTranformer)
        )
      };
    case NEW_SEARCH:
      return {
        ...state,
        results: [],
        currentOffset: 0,
        searchTerm: action.term
      };
    default:
      return state;
  }
};
