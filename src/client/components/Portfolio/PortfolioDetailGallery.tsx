import * as React from 'react';
import styled from 'styled-components';
import { getGalleryImages } from '../../utils/portfolioImage';
import { pageContainer } from '../../styles/extensions';
import { pxToRem } from '../../styles/utils';

interface PortfolioDetailGalleryGridProps {
  className?: string;
  imageCount: number;
}

const PortfolioDetailGalleryGrid: React.SFC<PortfolioDetailGalleryGridProps> = props => (
  <ul className={props.className}>{props.children}</ul>
);

PortfolioDetailGalleryGrid.displayName = 'Portfolio.DetailGallery.Grid';

const gapSize = pxToRem(20);

const calculateGridColumnSize = (total: number, gap: string = '0'): string => {
  const size = 100 / total;
  return `calc(${size}% - ${gap})`;
};

const StyledPortfolioDetailGalleryGrid = styled(PortfolioDetailGalleryGrid)`
  display: grid;
  grid-template-columns: repeat(${props =>
    `${props.imageCount}, ${calculateGridColumnSize(props.imageCount, gapSize)}`});
  grid-auto-flow: dense;
  list-style-type: none;
  margin: 0;
  padding: 0;
  grid-gap: ${gapSize};
`;

const getGalleryImageUrlByTotalCount = (totalGalleryItems: number) =>
  (imagePath: PortfolioImage): string => {
    if (totalGalleryItems > 2 && imagePath.mediumUrl) {
      return imagePath.mediumUrl;
    }

    return imagePath.originalUrl;
  };


const PortfolioDetailGalleryGridItem = styled.li`
  img {
    width: 100%;
  }
`;
PortfolioDetailGalleryGridItem.displayName = 'Portfolio.DetailGallery.GridItem';

interface PortfolioDetailGalleryProps {
  className?: string;
  portfolio: Portfolio;
}

export const PortfolioDetailGallery: React.SFC<PortfolioDetailGalleryProps> = (props) => {
  const galleryImagesPaths = getGalleryImages(props.portfolio.imagePaths);
  const getGalleryImage = getGalleryImageUrlByTotalCount(galleryImagesPaths.length);
  return (
    <article className={props.className}>
      <StyledPortfolioDetailGalleryGrid imageCount={galleryImagesPaths.length}>
        {galleryImagesPaths.map(path => (
          <PortfolioDetailGalleryGridItem key={path.originalUrl}>
            <img src={getGalleryImage(path)} alt={path.description || path.title} />
          </PortfolioDetailGalleryGridItem>
        ))}
      </StyledPortfolioDetailGalleryGrid>
    </article>
  );
};

PortfolioDetailGallery.displayName = 'Portfolio.DetailGallery';

const StyledPortfolioDetailGallery = styled(PortfolioDetailGallery)`
  ${pageContainer}
  margin: auto;
`;

export default StyledPortfolioDetailGallery;
