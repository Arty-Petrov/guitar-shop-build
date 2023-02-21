import { ProductCreate, ProductDelete, ProductGetList, ProductGetOne, ProductUpdate } from '@guitar-shop/contracts';
import { createPattern } from '@guitar-shop/core';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(
    private readonly productService: ProductService
  ) {}

  @MessagePattern(createPattern(ProductCreate.topic))
  public async create(
    @Payload() dto: ProductCreate.Request,
  ): Promise<ProductCreate.Response> {
    return this.productService.create(dto);
  }

  @MessagePattern(createPattern(ProductGetOne.topic))
  public async findProduct(
    @Payload() dto: ProductGetOne.Request,
  ): Promise<ProductGetOne.Response> {
    return this.productService.getProductById(dto);
  }

  @MessagePattern(createPattern(ProductGetList.topic))
  public async findProducts(
    @Payload() dto: ProductGetList.Request,
  ): Promise<ProductGetList.Response> {
    return this.productService.getProductsByFilter(dto);
  }

  @MessagePattern(createPattern(ProductUpdate.topic))
  public async update(
    @Payload() dto: ProductUpdate.Request,
  ): Promise<ProductUpdate.Response> {
    const { id } = dto;
    return this.productService.update(id, dto);
  }

  @MessagePattern(createPattern(ProductDelete.topic))
  public async delete(
    @Payload() dto: ProductDelete.Request,
  ): Promise<ProductDelete.Response> {
    return this.productService.delete(dto);
  }
}
