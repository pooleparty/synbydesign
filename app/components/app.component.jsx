import React, { Component } from 'react';
import LoadingStatusContainer from '../containers/loading-status.container';
import isAppLoading from '../util/is-app-loading.util';

export default class App extends Component {

  backToTop(){
    //FIXME
    alert('fixme!')
  }

  render() {

    return (
      <div aria-atomic="true" aria-live="polite" aria-busy={isAppLoading(this.props.appLoading)} >
        <LoadingStatusContainer />
        { this.props.children }
        <div className="text-center mtl">
          <a href="#" onClick={this.backToTop}>Back to top</a>
        </div>
      </div>
    );
  }
}