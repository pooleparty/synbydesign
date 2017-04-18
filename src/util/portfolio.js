/* @flow */
import { kebabCase } from 'lodash';
import type { Syn$TitledObject } from '../../types';

export default function getIdByTitle(portfolio: Syn$TitledObject): string {
  console.warn('Get rid of this function. Instead attach an id property that has this kebabCase value on the services that load the data');
  return kebabCase(portfolio.title);
}
