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

function mapStateToPropsForDetail(state: Syn$RootState) {
  // FIXME: this should go into a selector
  return {
    portfolioDetail: state.portfolio ?
      state.portfolio.filter(item => getIdByTitle(item) === state.selectedPortfolioId)[0] :
      {},
  };
}

export const PortfolioListContainer = connect(
  mapStateToPropsForList,
  { loadPortfolio },
)(PortfolioList);

export const PortfolioDetailContainer = connect(
  mapStateToPropsForDetail,
  { loadPortfolioDetail },
)(PortfolioDetail);
