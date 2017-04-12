/* @flow */
import { connect } from 'react-redux';
import PortfolioList from './PortfolioList';
import PortfolioDetail from './PortfolioDetail';
import { loadPortfolio, loadPortfolioDetail } from './actions';
import getIdByTitle from '../../util/portfolio';
import type { Syn$RootState } from '../../../types';

function mapStateToPropsForList({ portfolio }: Syn$RootState) {
  return {
    portfolio,
  };
}

export const PortfolioListContainer = connect(
  mapStateToPropsForList,
  { loadPortfolio },
)(PortfolioList);

function mapStateToPropsForDetail(state: Syn$RootState) {
  // FIXME: this should go into a selector
  console.log('state.selectedPortfolioId', state.selectedPortfolioId);
  return {
    portfolioDetail: state.portfolio ?
      state.portfolio.filter(item => getIdByTitle(item) === state.selectedPortfolioId)[0] :
      {},
  };
}

export const PortfolioDetailContainer = connect(
  mapStateToPropsForDetail,
  { loadPortfolioDetail },
)(PortfolioDetail);
