import { connect } from 'react-redux';
import { search } from '../../actions/search';
import SearchForm from './SearchForm';

function mapDispatchToProps(dispatch) {
  return {
    onSearchSubmitted: term => dispatch(search(term))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(SearchForm);
