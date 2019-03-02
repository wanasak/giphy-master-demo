import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
// import takeLatest from 'redux-saga';
import { SEARCH, searchError, searchSuccess } from '../actions/search';

const apiKey = 'jiBsbSEgy2P7YdorxTMBsNnY2oijCUaz';

function* doSearch({ term }) {
  try {
    const searchResults = yield call(
      axios.get,
      'https://api.giphy.com/v1/gifs/search',
      {
        params: {
          apiKey,
          q: term,
          limit: 25
        }
      }
    );
    yield put(searchSuccess(searchResults.data.data));
  } catch (e) {
    yield put(searchError());
  }
}

export default function*() {
  yield takeLatest(SEARCH, doSearch);
}
