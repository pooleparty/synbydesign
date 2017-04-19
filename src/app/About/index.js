/* @flow */
import { connect } from 'react-redux';
import About from './About';
import { loadAbout } from './actions';
import type { Syn$RootState } from '../../../types';

function mapStateToProps({ about, aboutLoaded }: Syn$RootState) {
  return {
    about,
    aboutLoaded,
  };
}

export default connect(mapStateToProps, { loadAbout })(About);
