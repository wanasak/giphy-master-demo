import { GET_RANDOM_GIPHY_SUCCESS } from '../actions/random';

const initialState = {
  giphy: null
};

function transformRandomGiphyResult(rawResult) {
  const { images } = rawResult;
  return {
    full: images.original.url,
    thumbnail: images.fixed_width_downsampled.url
  };
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_RANDOM_GIPHY_SUCCESS:
      return { ...state, giphy: transformRandomGiphyResult(action.giphy) };

    default:
      return state;
  }
};
