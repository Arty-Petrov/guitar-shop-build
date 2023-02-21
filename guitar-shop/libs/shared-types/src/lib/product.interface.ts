import { GuitarType, StringsCount } from '@guitar-shop/shared-types';

export interface Product {
  id?: number;
  title: string;
  description: string;
  guitarType: GuitarType;
  stringCount: StringsCount;
  article: string;
  imageUrl?: string;
  price: number;
  commentsCount?: number;
  rating?: number;
}
