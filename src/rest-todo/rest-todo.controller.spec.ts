import { Test, TestingModule } from '@nestjs/testing';
import { RestTodoController } from './rest-todo.controller';
import { RestTodoService } from './rest-todo.service';

describe('RestTodoController', () => {
  let controller: RestTodoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RestTodoController],
      providers: [RestTodoService],
    }).compile();

    controller = module.get<RestTodoController>(RestTodoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
