/* @flow */
import React, { Component } from 'react';
import styles from './PortfolioDetail.css';
import type { Syn$PortfolioDetailComponentProps } from '../../../types';

export default class PortfolioDetail extends Component {

  static defaultProps = {
    params: {},
  };

  hasLoadedPortfolio: () => void;

  constructor(props: Syn$PortfolioDetailComponentProps) {
    super(props);
    this.hasLoadedPortfolio = this.hasLoadedPortfolio.bind(this);
  }

  componentWillUnmount() {
    this.props.resetSelectedPortfolio();
  }

  hasLoadedPortfolio() {
    const { params, portfolioDetail } = this.props;
    if (!portfolioDetail || portfolioDetail.id !== params.id) {
      return false;
    }

    return true;
  }

  componentDidMount() {
    const {
      portfolioDetail,
      loadPortfolioDetail,
      params,
    } = this.props;

    const id: string = params.id;

    if (!this.hasLoadedPortfolio()) {
      loadPortfolioDetail(id);
    }
  }

  props: Syn$PortfolioDetailComponentProps;

  render() {
    if (!this.hasLoadedPortfolio()) {
      return (
        <div>Loading...</div>
      );
    }

    const { params, portfolioDetail } = this.props;
    const { title, imagePaths = { full: {} }, description, categories = [] } = portfolioDetail;

    return (
      <div className={styles.detail}>
        This is the detail view! {params.id}
        <h1>{title}</h1>
        <img src={imagePaths.full.url} alt={title} />
        <p>{description}</p>
        <ul>
          {categories.map(category => <li key={category}>{category}</li>)}
        </ul>
      </div>
    );
  }
}
