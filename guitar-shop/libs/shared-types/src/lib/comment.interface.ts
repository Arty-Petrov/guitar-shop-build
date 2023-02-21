export interface Comment {
  id?: number;
  authorId: string;
  productId: number;
  advantages: string;
  disadvantages: string;
  text: string;
  evaluation: number;
}
