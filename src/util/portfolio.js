/* @flow */
import { kebabCase } from 'lodash';
import type { Syn$TitledObject } from '../../types';

export default function getIdByTitle(portfolio: Syn$TitledObject): string {
  return kebabCase(portfolio.title);
}
