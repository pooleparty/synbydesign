/* @flow */
import type { Syn$RootStateReducer } from '../../types';
import {
  portfolioReducer,
  selectedPortfolioIdReducer,
  portfolioLoadedReducer,
} from '../app/Portfolio/reducers';
import {
  aboutReducer,
  aboutLoadedReducer,
} from '../app/About/reducers';
import loadingCountReducer from '../app/Loading/reducers';

const rootReducer: Syn$RootStateReducer = {
  selectedPortfolioId: selectedPortfolioIdReducer,
  portfolioLoaded: portfolioLoadedReducer,
  portfolio: portfolioReducer,
  about: aboutReducer,
  loadingCount: loadingCountReducer,
  aboutLoaded: aboutLoadedReducer,
};

export default rootReducer;
