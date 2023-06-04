import { Injectable } from '@nestjs/common';
import { CreateRestTodoDto } from './dto/create-rest-todo.dto';
import { UpdateRestTodoDto } from './dto/update-rest-todo.dto';

@Injectable()
export class RestTodoService {
  create(createRestTodoDto: CreateRestTodoDto) {
    return 'This action adds a new restTodo';
  }

  findAll() {
    return `This action returns all restTodo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restTodo`;
  }

  update(id: number, updateRestTodoDto: UpdateRestTodoDto) {
    return `This action updates a #${id} restTodo`;
  }

  remove(id: number) {
    return `This action removes a #${id} restTodo`;
  }
}
