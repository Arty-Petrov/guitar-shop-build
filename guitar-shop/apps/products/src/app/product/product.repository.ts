import { CRUDRepository } from '@guitar-shop/core';
import { FilterProducts, GuitarType, Product, StringsCount } from '@guitar-shop/shared-types';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductEntity } from './product.entity';
import { Product as Entry } from '.prisma/product-client';

@Injectable()
export class ProductRepository implements CRUDRepository<ProductEntity, number, Product>{
  constructor(
    private readonly prisma: PrismaService
  ) {}

  private async adaptEntryToInterface(entry: Entry): Promise<Product | null> {
    if (!entry) {
      return null;
    }
    return {
      ...entry,
      guitarType: entry.guitarType as GuitarType,
      stringsCount: entry.stringsCount as StringsCount,
    };
  }

  private async adaptEntriesToInterface(entries: Entry[]): Promise<Product[]> {
    if (entries.length) {
      return entries as Product[]
    }
    let products: Product[] = [];
    for (const entry of entries)  {
      const product = await this.adaptEntryToInterface(entry);
      products.push(product);
    }
    return products;
  }

  public async create(item: ProductEntity): Promise<Product> {
    const entityData = item.toObject();
    const product = await this.prisma.products.create({
      data: {
        ...entityData,
      },
    });
    return this.adaptEntryToInterface(product);
  }

  public async findByFilter(dto: FilterProducts) {
    const {
      guitar, strings, type, order, limit, page,
    } = dto;

    const products = await this.prisma.products.findMany({
      where: {
        guitarType: guitar,
        stringsCount: strings,
      },
      take: limit,
      include: {
        tags: true,
        category: true,
        },
      orderBy: [
        {
          [type]: order,
        },

      ],
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
    return this.adaptEntriesToInterface(products);
  }

  public async findById(id: number): Promise<Product | null> {
    const product = await this.prisma.products.findFirst({
      where: {
        id,
      },
    });
    return this.adaptEntryToInterface(product);
  }

  public async update(id: number, entity: ProductEntity): Promise<Product> {
    const entityData = entity.toObject();
    const updatedProduct = await this.prisma.products.update({
      where: { id },
      data: { ...entityData },
    });
    return this.adaptEntryToInterface(updatedProduct);
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.products.delete({
      where: { id, }
    });
  }
}
