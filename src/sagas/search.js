import axios from 'axios';
import { put, call, takeLatest, select } from 'redux-saga/effects';
import { SEARCH, searchError, searchSuccess } from '../actions/search';

const apiKey = 'jiBsbSEgy2P7YdorxTMBsNnY2oijCUaz';

const selectSearchState = state => state.search;

function* doSearch() {
  const { currentOffset, searchTerm } = yield select(selectSearchState);
  try {
    const searchResults = yield call(
      axios.get,
      'https://api.giphy.com/v1/gifs/search',
      {
        params: {
          apiKey,
          q: searchTerm,
          limit: 50,
          offset: currentOffset
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
