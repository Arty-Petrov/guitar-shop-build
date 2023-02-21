import { ProductsApi } from '@guitar-shop/contracts';
import {
  DEFAULT_PAGINATION_COUNT,
  DEFAULT_PRODUCTS_COUNT_LIMIT,
  DEFAULT_SORT_ORDER,
  DEFAULT_SORT_TYPE,
  GuitarType,
  SortOrder,
  SortType,
  StringsCount,
} from '@guitar-shop/shared-types';
import { PickType } from '@nestjs/swagger';
import { Expose, Transform } from 'class-transformer';
import { IsEnum, IsOptional } from 'class-validator';

export class FilterProductsQuery extends PickType(ProductsApi, ['guitarType', 'stringCount']){
  @IsOptional()
  @Transform(({value}) => value as GuitarType)
  @IsEnum(GuitarType)
  public guitar?: GuitarType | undefined = undefined;

  @IsOptional()
  @Expose({ name: 'strings' })
  @Transform(({value}) => value as StringsCount)
  @IsEnum(StringsCount)
  public strings?: StringsCount | undefined = undefined;

  @IsOptional()
  @Transform(({value}) => value as SortType)
  @IsEnum(SortType)
  public sortType?: SortType = DEFAULT_SORT_TYPE;

  @IsOptional()
  @Transform(({value}) => value as SortOrder)
  @IsEnum(SortOrder)
  public sortOrder?: SortOrder = DEFAULT_SORT_ORDER;

  @IsOptional()
  @Transform(({ value }) => +value)
  public limit?: number = DEFAULT_PRODUCTS_COUNT_LIMIT;

  @IsOptional()
  @Transform(({ value }) => +value)
  public page?: number = DEFAULT_PAGINATION_COUNT;
}
