import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import Navigation from './Navigation';

const pages = [
  { path: '/', title: 'Search' },
  { path: '/trending', title: 'Trending' },
  { path: '/random', title: 'Random' }
];

function mapStateToProps(state) {
  return { pages, currentPath: state.router.location.pathname };
}

function mapDispatchToProps(dispatch) {
  return {
    navigate: path => dispatch(push(path))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
