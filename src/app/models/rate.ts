import {Currency} from './currency';

export interface Rate {
  rates: Currency;
  base: string;
  date: string;
}
