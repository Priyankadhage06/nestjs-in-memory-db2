import { ApiProperty } from '@nestjs/swagger';

export class Product {
  @ApiProperty({ description: 'Unique identifier of the product', example: '101' })
  id: string;

  @ApiProperty({ description: 'Name of the product', example: 'Laptop' })
  name: string;

  @ApiProperty({ description: 'Price of the product in USD', example: 999.99 })
  
  price: number;
}
