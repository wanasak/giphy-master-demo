import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { showGiphyDisplay } from '../../actions/giphy';

function mapStateToProps(state) {
  return {
    results: state.search.results
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchResultClicked: giphy => dispatch(showGiphyDisplay(giphy))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
