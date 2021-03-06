'use strict';
import { DESIGN_CATEGORIES, OTHER_CATEGORIES, WEB_CATEGORIES, MIX_CATEGORIES } from '../configuration/';
import extractor from 'extract-image-props-from-html-string';

export const categoryReducerPartial = (types) => {
  return (previous, cat) => {
    return ( previous || types.includes(cat.slug) == true);
  };
};

export const addMetaData = (portfolioItem, meta) => {
  return Object.assign(portfolioItem, {
    meta: {
      showLiveSite: false,
      liveSiteUrl: null,
      stackDesign: false
    }
  }, (meta ? {
    meta: {
      showLiveSite: portfolioItem.isWebsite
        && typeof meta.website_url === 'string'
        && meta.website_url.length > 0 ? true : false,
      liveSiteUrl: portfolioItem.isWebsite
        && typeof meta.website_url === 'string'
        && meta.website_url.length > 0 ? meta.website_url : null,
      stackDesign: portfolioItem.isDesign
        && meta.stack_design == 'true' ? true : false,
      svg: portfolioItem.isDesign
        && typeof meta.svg === 'string'
        && meta.svg.length > 0 ? meta.svg : null
    }
  } : {}));
};

export default (portfolioList) => {
  if (!portfolioList || typeof portfolioList !== 'object' || portfolioList.length === 0) {
    return portfolioList;
  }

  const isWebsiteReducer = categoryReducerPartial(WEB_CATEGORIES);
  const isDesignReducer = categoryReducerPartial(DESIGN_CATEGORIES);
  const isOtherReducer = categoryReducerPartial(OTHER_CATEGORIES);
  const isMixReducer = categoryReducerPartial(MIX_CATEGORIES);

  return portfolioList.map((item) => {

    let altText = extractor.getAltText(item.content);
    altText = typeof altText === 'string' && altText.length > 0 ? altText : item.title;

    return addMetaData({
      ID: item.ID,
      title: item.title,
      slug: item.slug,
      sticky: item.sticky,
      featuredImagePath: item.featured_image.guid,
      fullSizeImage: {
        path: extractor.getSource(item.content),
        altText: altText,
        maxWidth: extractor.getWidth(item.content),
        maxHeight: extractor.getHeight(item.content)
      },
      skills: item.terms.post_tag ? item.terms.post_tag.map(tag => tag.name) : [],
      isWebsite: item.terms.category.reduce(isWebsiteReducer, false),
      isDesign: item.terms.category.reduce(isDesignReducer, false),
      isOther: item.terms.category.reduce(isOtherReducer, false),
      isMix: item.terms.category.reduce(isMixReducer, false)
    }, item.custom_meta);
  });
};
