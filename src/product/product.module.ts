import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller'; // Import the ProductController
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db'; // Import InMemoryDbModule here

@Module({
  imports: [InMemoryDBModule.forFeature('product')], // Register InMemoryDB for feature scope
  controllers: [ProductController], // Register ProductController
  providers: [ProductService], // Register ProductService
})
export class ProductModule {}
