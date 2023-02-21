import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [ProductModule, CommentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
