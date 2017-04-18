/* @flow */
import { createSelector } from 'reselect';
import type {
  Syn$RootState,
  Syn$Portfolio,
} from '../../../types';

const portfolioSelector = (state: Syn$RootState) => state.portfolio;
const selectedPortfolioIdSelector = (state: Syn$RootState) => state.selectedPortfolioId;

const portfolioDetailSelector = createSelector(
  [portfolioSelector, selectedPortfolioIdSelector],
  (portfolio: Syn$Portfolio[], id?: string) => {
    return portfolio.find(item => item.id === id);
  }
);

export default portfolioDetailSelector;