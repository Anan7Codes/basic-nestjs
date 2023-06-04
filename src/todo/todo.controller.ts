import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { TodoService } from './todo.service';
import { AuthGuard } from 'src/auth/auth.guard';


@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  getTodos() {
    return this.todoService.getTodos();
  }

  @Get(':id')
  getTodo(@Param('id', ParseIntPipe) id: number) {
    return this.todoService.getTodoById(id);
  }

  @Post()
  @UseGuards(AuthGuard)
  createTodo(@Body(new ValidationPipe) createTodoDTO: CreateTodoDto) {
    return this.todoService.createTodo(createTodoDTO);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  updateTodo(@Param('id') id: string, @Body(new ValidationPipe) updateTodoDTO: UpdateTodoDto) {
    return this.todoService.updateTodoById(Number(id), updateTodoDTO);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteTodoById(@Param('id') id: number) {
    const num = Number(id);
    return this.todoService.deleteTodoById(num);
  }
}