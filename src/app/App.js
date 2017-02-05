/* @flow */
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import type { AppProps } from '../../types';

function mapStateToProps({ portfolio }) {
  return {
    portfolio,
  };
}

export function App({
  portfolio,
  children,
}: AppProps) {
  return (
    <div>
      <h1>Welcome!</h1>
      <Link to="/">Home</Link> | <Link to="/detail">Detail</Link>
      {portfolio.map(item => <li key={`item-${item}`}>{item}</li>)}
      {children}
    </div>
  );
}

App.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.string).isRequired,
  children: PropTypes.node,
};

App.defaultProps = {
  portfolio: ['These', 'are', 'defaults'],
  children: null,
};

export default connect(mapStateToProps, [])(App);