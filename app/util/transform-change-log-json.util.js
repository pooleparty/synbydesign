'use strict';

export default (changeLogList) => {
  if (!changeLogList || typeof changeLogList !== 'object' || changeLogList.length === 0) {
    return changeLogList;
  }

  return changeLogList.map(({ID, title, slug, sticky, content, excerpt, modified_gmt}) => {
    return {
      ID,
      title,
      slug,
      sticky,
      htmlContent: content,
      htmlExcerpt: excerpt,
      modifiedDate: modified_gmt
    };
  });
};
