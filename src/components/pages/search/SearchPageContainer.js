import { connect } from 'react-redux';
import Search from './SearchPage';
import { newSearch, search } from '../../../actions/search';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmitted: term => {
      dispatch(newSearch(term));
      dispatch(search());
    },
    onInfiniteScroll: () => {
      dispatch(search());
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);