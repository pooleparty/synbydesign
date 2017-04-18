/* @flow */
import React, { Component } from 'react';
import { Link } from 'react-router';
import type { Syn$PortfolioListComponentProps } from '../../../types';

export default class PortfolioList extends Component {

  componentDidMount() {
    this.props.loadPortfolio();
  }

  props: Syn$PortfolioListComponentProps;

  render() {
    const { portfolio } = this.props;
    return (
      <div>
        This is the portfolio list
        {portfolio.map(item => (
          <li key={`item-${item.title}`}>
            <Link to={`/detail/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </div>
    );
  }
}
