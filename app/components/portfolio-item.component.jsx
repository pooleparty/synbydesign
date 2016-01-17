'use strict';

import React from 'react';
import { Link } from 'react-router';
//FIXME...
//import Skills from './skills';

export default (props) => {

  const { title, featured_image } = props.item;
  const altAttr = `Preview image of ${title}`;
  const titleAttr = `View detailed image of ${title}`;
  const featuredImage = featured_image ? featured_image.guid : null;

  return (
    <li className="col-sm-6  col-md-4" role="presentation">
      <div className="portfolio__item">
          <span className="h4  portfolio__title">
            <span className="portfolio__title__text">{props.item.title}</span>
          </span>
        <Link to={`/detail/${props.item.ID}`} aria-label={titleAttr}>
          <img className="portfolio__img" src={featuredImage} alt={altAttr} />
        </Link>
      </div>
    </li>
  );

  //return (
  //  <li className="col-sm-6  col-md-4" role="presentation">
  //    <div className="portfolio__item">
  //      <span className="h4  portfolio__title">
  //        <span className="portfolio__title__text">{props.item.title}</span>
  //      </span>
  //      <Link to={`/detail/${props.type}/${props.item.ID}`} aria-label={titleAttr}>
  //        <img className="portfolio__img" src={featuredImage} alt={altAttr} />
  //      </Link>
  //    </div>
  //    <Skills title={props.item.title}
  //            classNames="skills  small"
  //            skills={props.item.terms && props.item.terms.post_tag ? props.item.terms.post_tag : []} />
  //  </li>
  //);
};