import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateItemsDTO } from './dto/create-items.dto';

@Controller('items')
export class ItemsController {

@Get()
findAll(): string {
  return "This is all items";
}

@Get(':id')
findOne(@Param() param): string{
  return `Item ${param.id}`
}

@Post()
create(@Body () createItemDTO: CreateItemsDTO) : string {
  return `Name: ${createItemDTO.name} Desc:${createItemDTO.title}`;
}

}


