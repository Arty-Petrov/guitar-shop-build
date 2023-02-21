export const enum AdvantagesLength {
  Min = 50,
  Max = 100,
}

export const enum DisadvantagesLength {
  Min = 50,
  Max = 100,
}

export const enum TextLength {
  Min = 5,
  Max = 1024,
}

export const enum EvaluationRange {
  Min = 1,
  Max = 5,
}

export const CommentsApiError = {
  CommentIdNotValid: 'The comment id not valid',
  AuthorIdNotValid: 'The author id must be a Mongo Id',
  ProductIdNotValid: 'The product id not valid',
  AdvantagesNotValid: `Advantages description must be min ${AdvantagesLength.Min}, max ${AdvantagesLength.Max} chars length`,
  DisadvantagesNotValid: `Disadvantages description must be min ${DisadvantagesLength.Min}, max ${DisadvantagesLength.Max} chars length`,
  TextNotValid: `Comment text must be min ${TextLength.Min}, max ${TextLength.Max} chars length`,
  EvaluationNotValid: `Evaluation value is out from, min ${EvaluationRange.Min}, max ${EvaluationRange.Max} range`,
  EvaluationNotNumber: `Evaluation value must be a number`,
  } as const;

export const CommentsApiDescription = {
  Id: 'The uniq comment id',
  AuthorId: 'The uniq author id',
  ProductId: 'The uniq product id',
  Advantages: `Product title, min ${AdvantagesLength.Min}, max ${AdvantagesLength.Max} chars length`,
  Disadvantages: `Product description, min ${DisadvantagesLength.Min}, max ${DisadvantagesLength.Max} chars length`,
  Text: `Product description, min ${TextLength.Min}, max ${TextLength.Max} chars length`,
  Evaluation: `Product evaluation, min ${EvaluationRange.Min}, max ${EvaluationRange.Max} value`,
  CreatedAt: `Comment publication date (ISO format)`,
} as const;
