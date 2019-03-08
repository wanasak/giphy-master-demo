export const GET_RANDOM_GIPHY = 'GET_RANDOM_GIPHY';
export const GET_RANDOM_GIPHY_SUCCESS = 'GET_RANDOM_GIPHY_SUCCESS';
export const GET_RANDOM_GIPHY_FAIL = 'GET_RANDOM_GIPHY_FAIL';

export const getRandomGiphy = () => ({ type: 'GET_RANDOM_GIPHY' });
export const getRandomGiphySuccess = giphy => ({
  type: 'GET_RANDOM_GIPHY_SUCCESS',
  giphy
});
export const getRandomGiphyFail = () => ({ type: 'GET_RANDOM_GIPHY_FAIL' });
