import {
  AdvantagesLength,
  CommentsApiDescription,
  CommentsApiError,
  DisadvantagesLength,
  InputExample,
  PriceRange,
  TextLength,
} from '@guitar-shop/shared-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId, IsNumber, Length, Max, Min } from 'class-validator';

export class CommentsApi {
  @ApiProperty({
    description: CommentsApiDescription.Id,
    example: InputExample.PostgreId
  })
  public id: number;

  @ApiProperty({
    description: CommentsApiDescription.AuthorId,
    example: InputExample.MongoId
  })
  @IsMongoId({
    message: CommentsApiError.AuthorIdNotValid
    })
  public authorId: string;

  @ApiProperty({
    description: CommentsApiDescription.ProductId,
    example: InputExample.PostgreId
  })
  public productId: number;

  @ApiProperty({
    description: CommentsApiDescription.Advantages,
    example: InputExample.Text,
  })
  @Length(
    AdvantagesLength.Min,
    AdvantagesLength.Max,
    {
      message: CommentsApiError.AdvantagesNotValid
    })
  public advantages: string;

  @ApiProperty({
    description: CommentsApiDescription.Disadvantages,
    example: InputExample.Text,
  })
  @Length(
    DisadvantagesLength.Min,
    DisadvantagesLength.Max,
    {
      message: CommentsApiError.DisadvantagesNotValid
    })
  public disadvantages: string;

  @ApiProperty({
    description: CommentsApiDescription.Text,
    example: InputExample.Text,
  })
  @Length(
    TextLength.Min,
    TextLength.Max,
    {
      message: CommentsApiError.TextNotValid
    })
  public text: string;

  @ApiProperty({
    description: CommentsApiDescription.Evaluation,
    example: InputExample.Number,
  })
  @IsNumber(null,{
    message: CommentsApiError.EvaluationNotNumber
  })
  @Min(PriceRange.Min, {
    message: CommentsApiError.EvaluationNotValid
    })
  @Max(PriceRange.Max,{
    message: CommentsApiError.EvaluationNotValid
  })
  public evaluation: number;
}
