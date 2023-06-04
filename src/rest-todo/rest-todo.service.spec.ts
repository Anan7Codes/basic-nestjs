import { Test, TestingModule } from '@nestjs/testing';
import { RestTodoService } from './rest-todo.service';

describe('RestTodoService', () => {
  let service: RestTodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RestTodoService],
    }).compile();

    service = module.get<RestTodoService>(RestTodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
