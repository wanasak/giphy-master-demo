import {
  SEARCH_SUCCESS,
  NEW_SEARCH,
  SEARCH_FAIL,
  SEARCH
} from '../actions/search';
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {
  results: [],
  currentOffset: 0,
  searchTerm: null,
  isActive: false,
  isLoading: false
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
        ),
        isLoading: false,
        isActive: action.results.length === 50
      };
    case NEW_SEARCH:
      return {
        ...state,
        results: [],
        currentOffset: 0,
        searchTerm: action.term
      };
    case SEARCH: {
      return { ...state, isLoading: true };
    }
    case SEARCH_FAIL: {
      return { ...state, isLoading: false };
    }
    case LOCATION_CHANGE: {
      return initialState;
    }
    default:
      return state;
  }
};
