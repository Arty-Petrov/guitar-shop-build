import { GuitarType } from './guitar-type.enum';
import { SortOrder } from './sort-order.enum';
import { SortType } from './sort-type.enum';
import { StringsCount } from './strings-count.enum';

export const DEFAULT_SORT_ORDER = SortOrder.Descended;
export const DEFAULT_SORT_TYPE = SortType.CreatedAt;
export const DEFAULT_PRODUCTS_COUNT_LIMIT = 9;
export const DEFAULT_PAGINATION_COUNT = 1;

export const enum TitleLength {
  Min = 10,
  Max = 100,
}

export const enum DescriptionLength {
  Min = 20,
  Max = 1024,
}

export const enum ArticleLength {
  Min = 5,
  Max = 40,
}

export const enum PriceRange {
  Min = 100,
  Max = 1000000,
}

export const ProductsApiError = {
  EmailNotValid: 'The email is not valid',
  Exists: 'User with this email already exists',
  TitleNotValid: `Product title must be min ${TitleLength.Min}, max ${TitleLength.Max} chars length`,
  DescriptionNotValid: `Product must be min ${DescriptionLength.Min}, max ${DescriptionLength.Max} chars length`,
  GuitarTypeIsWrong: `Guitar type isn\'t match any of this values: ${Object.values(GuitarType).join(', ')}\``,
  StringsCountIsWrong: `Guitar string count isn\'t match any of this values: ${Object.values(StringsCount).join(', ')}\``,
  ArticleNotValid: `Product article must be min ${ArticleLength.Min}, max ${ArticleLength.Max} chars length`,
  PriceNotValid: `Price value is out from, min ${PriceRange.Min}, max ${PriceRange.Max} range`,
  PriceNotNumber: `Price must be a number`,
  PasswordIsWrong: 'User password is wrong',
  } as const;

export const ProductsApiDescription = {
  Id: 'The uniq product id',
  Title: `Product title, min ${TitleLength.Min}, max ${TitleLength.Max} chars length`,
  Description: `Product description, min ${DescriptionLength.Min}, max ${DescriptionLength.Max} chars length`,
  GuitarType: `Guitar type could be one of this values: ${Object.values(GuitarType).join(', ')}\``,
  StringsCount: `Guitar string count could be one of this values: ${Object.values(StringsCount).join(', ')}\``,
  Article: `Product article, min ${ArticleLength.Min}, max ${ArticleLength.Max} chars length`,
  Price: `Product price, min ${PriceRange.Min}, max ${PriceRange.Max} value`,
  ProductImage: `Product image, file type *.png/jpg/jpeg allowed to upload`,
  Rating: 'Automatic calculated value of product rating based on comments evaluations',
  CommentsCount: 'Automatic calculated count of product comments',
  CreatedAt: `Product publication date (ISO format)`,
} as const;
