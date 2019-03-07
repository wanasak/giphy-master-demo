import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './App';
import { hideGiphyDisplay } from '../../actions/giphy';

const mapStateToProps = state => ({
  giphyDisplayIsShown: state.giphyDisplay.isShown,
  giphyDisplayed: state.giphyDisplay.giphy
});

const mapDispatchToProps = dispatch => ({
  hideGiphyDisplay: () => dispatch(hideGiphyDisplay())
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
