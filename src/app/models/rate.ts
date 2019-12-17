import {Currency} from './currency';

export interface Rates {
  rate: Currency;
  base: string;
  date: string;
}
