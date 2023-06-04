import { Module } from '@nestjs/common';
import { RestTodoService } from './rest-todo.service';
import { RestTodoController } from './rest-todo.controller';

@Module({
  controllers: [RestTodoController],
  providers: [RestTodoService],
})
export class RestTodoModule {}
