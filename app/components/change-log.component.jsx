'use strict';
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Navigation from './navigation.component';
import ScreenReaderFocusElm from './screen-reader-focus-elm.component';
import { TITLE, UI_IDS } from '../configuration';

export default class ChangeLog extends Component {

  renderChangeLogItem(item){
   return (
     <li key={item.ID}>
       <h2 className="h4">{item.title}</h2>
       <div dangerouslySetInnerHTML={{__html: item.htmlContent}} />
     </li>
   );
  }

  render(){

    const { loadedChangeLog, changeLog } = this.props;
    let contents = (<p>Loading...</p>);
    let pageTitle = `Loading... Change Log for ${TITLE}`;

    if(loadedChangeLog) {
      pageTitle = `Change Log for ${TITLE}`;
      contents = (
        <ul>
          {this.props.changeLog.map(this.renderChangeLogItem)}
        </ul>
      );
    }

    return (
      <section className="container-fluid">
        <DocumentTitle title={pageTitle}/>
        <Navigation view={'detail'}/>
        <ScreenReaderFocusElm elmId={UI_IDS.changeLog}>
          {contents}
        </ScreenReaderFocusElm>
      </section>
    );
  }
}

ChangeLog.propTypes = {
  changeLog: React.PropTypes.array.isRequired,
  loadedChangeLog: React.PropTypes.bool.isRequired,
  loadChangeLog: React.PropTypes.func.isRequired
};
