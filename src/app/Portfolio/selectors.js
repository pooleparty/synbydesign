/* @flow */
import { createSelector } from 'reselect';
import type {
  Syn$RootState,
  Syn$Portfolio,
} from '../../../types';
import getIdByTitle from '../../util/portfolio';

const portfolioSelector = (state: Syn$RootState) => state.portfolio;
const selectedPortfolioIdSelector = (state: Syn$RootState) => state.selectedPortfolioId;

const portfolioDetailSelector = createSelector(
  [portfolioSelector, selectedPortfolioIdSelector],
  (portfolio: Syn$Portfolio[], id?: string) => {
    return portfolio.find(item => getIdByTitle(item) === id);
  }
);

export default portfolioDetailSelector;