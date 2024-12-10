import { Injectable } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { Product } from './product.entity';

@Injectable()
export class ProductService {
  constructor(private readonly dbService: InMemoryDBService<Product>) {}

  create(product: Product) {
    return this.dbService.create(product);
  }

  findAll(): Product[] {
    return this.dbService.getAll();
  }

  findById(id: string): Product {
    return this.dbService.get(id);
  }

  update(product: Product) {
    this.dbService.update(product);
  }

  delete(id: string) {
    this.dbService.delete(id);
  }
}
