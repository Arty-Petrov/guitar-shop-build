import { Entity } from '@guitar-shop/core';
import { GuitarType, Product, StringsCount } from '@guitar-shop/shared-types';

export class ProductEntity implements Entity<ProductEntity>, Product {
  public id?: number;
  public title: string;
  public description: string;
  public guitarType: GuitarType;
  public stringCount: StringsCount;
  public article: string;
  public imageUrl?: string;
  public price: number;
  public commentsCount?: number;
  public rating?: number;

  constructor(product: Product) {
    this.fillEntity(product);
  }

  public toObject(): ProductEntity {
    return { ...this };
  }

  public fillEntity(entity: Product): void {
    this.id = entity.id;
    this.title = entity.title;
    this.description = entity.description;
    this.guitarType = entity.guitarType;
    this.stringCount = entity.stringCount;
    this.article = entity.article;
    this.imageUrl = entity.imageUrl;
    this.price = entity.price;
    this.commentsCount = entity.commentsCount;
    this.rating = entity.rating;
  }
}
