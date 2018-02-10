import * as React from 'react';
import styled from 'styled-components';
import Item from './PortfolioItem';
import { pxToRem } from '../../styles/utils';
import { maxWidth, horizontalPadding, GALLERY } from '../../styles/vars';
import GalleryItem from './PortfolioGalleryItem';
import GalleryLink from './PortfolioGalleryLink';

interface Props {
  items: Portfolio[];
  tag?: Tag;
}

interface DefaultProps {
  items: Portfolio[];
  tag: Tag;
}

export const PortfolioGallery: React.SFC<Props> = (props) => {
  const { items, tag: Tag, ...rest } = props as Props & DefaultProps;
  return (
    <Tag {...rest}>
      {items.map(item => (
        <GalleryItem key={item.id} featured={item.featured}>
          <GalleryLink to={`/portfolio/${item.id}`} featured={item.featured}>
            <Item {...item} />
          </GalleryLink>
        </GalleryItem>
      ))}
    </Tag>
  );
};

PortfolioGallery.displayName = 'PortfolioGallery';

PortfolioGallery.defaultProps = {
  items: [] as Portfolio[],
  tag: 'ul',
} as DefaultProps;

export default styled(PortfolioGallery)`
  max-width: ${pxToRem(maxWidth)};
  padding: 0 ${pxToRem(horizontalPadding - GALLERY.itemPadding)};
  margin: 0 auto;
  display: grid;
  list-style-type: none;
  grid-template-columns: repeat(auto-fit, minmax(${pxToRem(GALLERY.minItemSize)}, 1fr));
  grid-auto-flow: dense;
`;
