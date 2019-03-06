import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class InfiniteScroll extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    isLoading: PropTypes.bool.isRequired,
    onTrigger: PropTypes.func.isRequired
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
    const { isLoading, onTrigger } = this.props;
    const viewportHeight = document.documentElement.clientHeight;
    const { bottom } = this.contianer.getBoundingClientRect();
    if (!isLoading && bottom - 1 <= viewportHeight) {
      onTrigger();
    }
  }

  render() {
    const { children, isLoading } = this.props;
    return (
      <div ref={e => (this.contianer = e)}>
        {children}
        {isLoading && <div>Loading...</div>}
      </div>
    );
  }
}
