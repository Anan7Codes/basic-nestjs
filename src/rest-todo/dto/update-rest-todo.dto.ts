import { PartialType } from '@nestjs/mapped-types';
import { CreateRestTodoDto } from './create-rest-todo.dto';

export class UpdateRestTodoDto extends PartialType(CreateRestTodoDto) {}
