import {
  ArticleLength,
  DescriptionLength,
  GuitarType,
  InputExample,
  PriceRange,
  ProductsApiDescription,
  ProductsApiError,
  StringsCount,
  TitleLength,
} from '@guitar-shop/shared-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, Length, Max, Min } from 'class-validator';

export class ProductsApi {
  @ApiProperty({
    description: ProductsApiDescription.Id,
    example: InputExample.PostgreId
  })
  public id: number;

  @ApiProperty({
    description: ProductsApiDescription.Title,
    example: InputExample.Text,
  })
  @Length(
    TitleLength.Min,
    TitleLength.Max,
    {
      message: ProductsApiError.TitleNotValid
    })
  public title: string;

  @ApiProperty({
    description: ProductsApiDescription.Description,
    example: InputExample.Text,
  })
  @Length(
    DescriptionLength.Min,
    DescriptionLength.Max,
    {
      message: ProductsApiError.DescriptionNotValid
    })
  public description: string;

  @ApiProperty({
    description: ProductsApiDescription.GuitarType,
  })
  @IsEnum(
    GuitarType,
    {
      message: ProductsApiError.GuitarTypeIsWrong
    })
  public guitarType: GuitarType;

  @ApiProperty({
    description: ProductsApiDescription.StringsCount,
  })
  @IsEnum(
    StringsCount,
    {
      message: ProductsApiError.StringsCountIsWrong
    })
  public stringCount: StringsCount;

  @ApiProperty({
    description: ProductsApiDescription.Article,
    example: InputExample.Text,
  })
  @Length(
    ArticleLength.Min,
    ArticleLength.Max,
    {
      message: ProductsApiError.ArticleNotValid
    })
  public article: string;

  @ApiProperty({
    description: ProductsApiDescription.ProductImage,
    example: InputExample.PictureUrl,
  })
  public imageUrl: string;

  @ApiProperty({
    description: ProductsApiDescription.Price,
    example: InputExample.Number,
  })
  @IsNumber(null,{
    message: ProductsApiError.PriceNotNumber
  })
  @Min(PriceRange.Min, {
    message: ProductsApiError.PriceNotValid
    })
  @Max(PriceRange.Max,{
    message: ProductsApiError.PriceNotValid
  })
  public price: number;

  @ApiProperty({
    description: ProductsApiDescription.CommentsCount,
    example: InputExample.Number,
  })
  public commentsCount: number;

  @ApiProperty({
    description: ProductsApiDescription.Rating,
    example: InputExample.Number,
  })
  public rating: number;
}
