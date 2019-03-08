import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  getRandomGiphyFail,
  getRandomGiphySuccess,
  GET_RANDOM_GIPHY
} from '../actions/random';

const apiKey = 'jiBsbSEgy2P7YdorxTMBsNnY2oijCUaz';

function* getRandomGiphy() {
  try {
    const randomGiphyResult = yield call(
      axios.get,
      'https://api.giphy.com/v1/gifs/random',
      {
        params: { apiKey }
      }
    );
    yield put(getRandomGiphySuccess(randomGiphyResult.data.data));
  } catch (error) {
    yield put(getRandomGiphyFail());
  }
}

export default function*() {
  yield takeLatest(GET_RANDOM_GIPHY, getRandomGiphy);
}
