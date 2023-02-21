import { FilterProducts, GuitarType, Product, SortOrder, SortType, StringsCount } from '@guitar-shop/shared-types';

export namespace ProductGetList {
  export const topic = 'product.get-list.query'

  export class Request implements FilterProducts {

    public guitar: GuitarType | undefined;

    public strings: StringsCount | undefined;

    public type: SortType;

    public order: SortOrder;

    public limit: number;

    public page: number;
  }

  export class Response {
    products: Product[];
  }
}

