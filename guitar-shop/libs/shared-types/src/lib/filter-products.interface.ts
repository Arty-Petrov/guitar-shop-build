import { GuitarType, SortOrder, SortType, StringsCount } from '@guitar-shop/shared-types';

export interface FilterProducts {
  guitar: GuitarType | undefined;
  strings: StringsCount | undefined;
  type: SortType;
  order: SortOrder;
  limit: number;
  page: number;
}
