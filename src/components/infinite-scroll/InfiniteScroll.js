import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner/Spinner';

export default class InfiniteScroll extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onTrigger: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
    this.contianer = null;
    this.scrollListener = this.scrollListener.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.scrollListener);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.scrollListener);
  }

  scrollListener() {
    const { isLoading, onTrigger, isActive } = this.props;
    const viewportHeight = document.documentElement.clientHeight;
    const { bottom } = this.contianer.getBoundingClientRect();
    if (isActive && !isLoading && bottom - 1 <= viewportHeight) {
      onTrigger();
    }
  }

  render() {
    const { children, isLoading } = this.props;
    return (
      <div ref={e => (this.contianer = e)}>
        {children}
        {isLoading && <Spinner />}
      </div>
    );
  }
}
