'use strict';
import React, { Component } from 'react';
import LoadingStatusContainer from '../containers/loading-status.container';
import isAppLoading from '../util/is-app-loading.util';
import { Link } from 'react-router';
import Scroll from 'react-scroll';
import { UI_IDS } from '../configuration';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';
const { Link: ScrollLink } = Scroll;

/** Class representing the App */
export default class App extends Component {

  /**
   * Back to top method. Used to jump the user back to the top of the page.
   */
  backToTop(){
    document.getElementById(UI_IDS.appContents).focus();
  }

  /**
   * Render method used to generate the entire application tree. Ths is the parent
   * component to all other components for the site
   * @returns {XML}
   */
  render() {

    const clsName = isAppLoading(this.props.appLoading) ? 'page-loading' : 'page-loading page-loading--done';
    const isChangeLog = window.location.hash.substr(1).indexOf('changelog') > -1;

    return (
      <ScreenReaderFocusElm elmId={UI_IDS.appContents} className="no-focus-ring">
        <div aria-atomic="true"
             aria-live="polite"
             aria-busy={isAppLoading(this.props.appLoading)}>
          <LoadingStatusContainer />
          <div className={clsName}>
            { this.props.children }
            <div className="text-center mtl">
              { !isChangeLog ? (
                <div>
                  <Link to="/changelog">
                    Change Log
                  </Link>
                </div>
              ) : (<div></div>) }
              <ScrollLink href="#" onClick={this.backToTop} to={UI_IDS.appContents} spy={true} smooth={true} duration={500}>Back to Top</ScrollLink>
            </div>
          </div>
        </div>
      </ScreenReaderFocusElm>
    );
  }
}

App.propTypes = {
  appLoading: React.PropTypes.shape({
    activeRequests: React.PropTypes.number.isRequired,
    loadedRequests: React.PropTypes.number.isRequired
  })
};

App.defaultPropTypes = {
  appLoading: {
    activeRequests: 0,
    loadedRequests: 0
  }
};
