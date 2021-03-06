'use strict';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);
import TestUtils from 'react-addons-test-utils';
import React from 'react';
import Navigation from './navigation.component';
import Logo from './logo.component';
import { UI_IDS } from '../configuration';

describe('Navigation', () => {  
  let requestedID = null;
  let r;
  let actual;
  let expected;

  beforeEach(()=>{
    r = TestUtils.createRenderer();
  });

  afterEach(()=>{
    requestedID = null;
    r = undefined;
    actual = undefined;
    expected = undefined;
  });

  describe('Default or \'home\' view', ()=>{

    it('should by render full navigation', () => {

      r.render(<Navigation />);
      actual = r.getRenderOutput();

      expect(actual).toIncludeJSX(<a href="https://www.linkedin.com/in/ericmasiello" className="pill">LinkedIn</a>);
      expect(actual).toIncludeJSX(<a href="http://www.twitter.com/ericmasiello" className="pill">Twitter</a>);
    });

    it('should render the logo', ()=>{

      r.render(<Navigation />);
      actual = r.getRenderOutput();

      expect(actual).toIncludeJSX(<Logo view={undefined} logoID={UI_IDS.logo} />);

      r.render(<Navigation view="home" />);
      actual = r.getRenderOutput();

      expect(actual).toIncludeJSX(<Logo view="home" logoID={UI_IDS.logo} />);
    });

    it('should render the bottom border', ()=>{

      r.render(<Navigation />);
      actual = r.getRenderOutput();

      expect(actual).toIncludeJSX(
        <div className="row  masthead__decoration-container  middle-xs">
          <div className="col-xs  masthead__decoration-line"></div>
          <div className="col-xs  masthead__decoration  masthead__decoration--bottom"></div>
          <div className="col-xs  masthead__decoration-line"></div>
        </div>
      );

      r.render(<Navigation view="home" />);
      actual = r.getRenderOutput();

      expect(actual).toIncludeJSX(
        <div className="row  masthead__decoration-container  middle-xs">
          <div className="col-xs  masthead__decoration-line"></div>
          <div className="col-xs  masthead__decoration  masthead__decoration--bottom"></div>
          <div className="col-xs  masthead__decoration-line"></div>
        </div>
      );
    });

  });

  describe('Detail view', ()=>{

    beforeEach(()=>{
      r.render(<Navigation view="detail" />);
      actual = r.getRenderOutput();
    });

    it('should not render the full navigation', () => {

      expect(actual).toNotIncludeJSX(<a href="https://www.linkedin.com/in/ericmasiello" className="pill">LinkedIn</a>);
      expect(actual).toNotIncludeJSX(<a href="http://www.twitter.com/ericmasiello" className="pill">Twitter</a>);
    });

    it('should render the logo', ()=>{

      expect(actual).toIncludeJSX(<Logo view="detail" logoID={UI_IDS.logo} />);
    });

    it('should not render the bottom border', ()=>{

      expect(actual).toNotIncludeJSX(
        <div className="row  masthead__decoration-container  middle-xs">
          <div className="col-xs  masthead__decoration-line"></div>
          <div className="col-xs  masthead__decoration  masthead__decoration--bottom"></div>
          <div className="col-xs  masthead__decoration-line"></div>
        </div>
      );
    });
  });
});
