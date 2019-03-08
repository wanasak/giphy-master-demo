import RandomPage from './RandomPage';
import { connect } from 'react-redux';
import { getRandomGiphy } from '../../../actions/random';
import { showGiphyDisplay } from '../../../actions/giphy';

const mapStateToProps = state => ({
  giphy: state.random.giphy
});

const mapDispatchToProps = dispatch => ({
  thumbnailClicked: giphy => dispatch(showGiphyDisplay(giphy)),
  getRandomGiphy: () => dispatch(getRandomGiphy())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomPage);
