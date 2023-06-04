import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { RestTodoModule } from './rest-todo/rest-todo.module';

@Module({
  imports: [TodoModule, RestTodoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
