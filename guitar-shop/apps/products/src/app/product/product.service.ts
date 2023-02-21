import { ProductCreate, ProductDelete, ProductGetList, ProductGetOne, ProductUpdate } from '@guitar-shop/contracts';
import { RmqServiceName } from '@guitar-shop/shared-types';
import { HttpStatus, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {

  constructor(
    @Inject(RmqServiceName.Auth) private readonly authRmqClient: ClientProxy,
    private readonly productRepository: ProductRepository,
  ) {}

  public async create(dto: ProductCreate.Request): Promise<ProductCreate.Response> {
    const productEntity = new ProductEntity({ ...dto });
    const newProduct = await this.productRepository.create(productEntity);

    return  {product: {...newProduct}};
  }

  public async update(id: number, dto: ProductUpdate.Request): Promise<ProductUpdate.Response> {
    const currentProduct = await this.productRepository.findById(id);
    const productEntity = new ProductEntity({ ...currentProduct, ...dto });
    const newProduct = await this.productRepository.update(id, productEntity);
    return  {product: {...newProduct}};
  }

  public async getProductsByFilter(filter: ProductGetList.Request): Promise<ProductGetList.Response> {
    const products = await this.productRepository.findByFilter(filter);
    return { products: products };
  }

  public async getProductById(dto: ProductGetOne.Request): Promise<ProductGetOne.Response> {
    const product = await this.productRepository.findById(dto.id);
    return { product: product };
  }

  public async delete(dto: ProductDelete.Request): Promise<ProductDelete.Response> {
    const {id} = dto;
    await this.productRepository.destroy(id);

    return { response: HttpStatus.OK };

  }
}
