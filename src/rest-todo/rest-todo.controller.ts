import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RestTodoService } from './rest-todo.service';
import { CreateRestTodoDto } from './dto/create-rest-todo.dto';
import { UpdateRestTodoDto } from './dto/update-rest-todo.dto';

@Controller('rest-todo')
export class RestTodoController {
  constructor(private readonly restTodoService: RestTodoService) {}

  @Post()
  create(@Body() createRestTodoDto: CreateRestTodoDto) {
    return this.restTodoService.create(createRestTodoDto);
  }

  @Get()
  findAll() {
    return this.restTodoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restTodoService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestTodoDto: UpdateRestTodoDto,
  ) {
    return this.restTodoService.update(+id, updateRestTodoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restTodoService.remove(+id);
  }
}
