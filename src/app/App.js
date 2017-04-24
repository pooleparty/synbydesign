/* @flow */
import React, { PropTypes } from 'react';
import type { Syn$AppProps } from '../../types';

export default function App({
  children,
}: Syn$AppProps) {
  return (
    <div>
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

App.defaultProps = {
  children: null,
};
