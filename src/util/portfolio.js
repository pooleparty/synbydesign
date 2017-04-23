/* @flow */
import { kebabCase } from 'lodash';
import type { Syn$TitledObject } from '../../types';

export default function getIdByTitle(portfolio: Syn$TitledObject): string {
  return kebabCase(portfolio.title);
}

export function filterPortfolioById(portfolio: Syn$Portfolio[], id?: string): ?Syn$Portfolio {
  return portfolio.find(item => item.id === id);
}