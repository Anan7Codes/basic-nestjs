import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
    private todos = [
        { id: 1, title: 'Todo 1', description: 'Description 1', done: false },
        { id: 2, title: 'Todo 2', description: 'Description 2', done: false },
    ]

    getTodos() {
        return this.todos
    }

    getTodoById(id: number) {
        return this.todos.filter(todo => todo.id === id)
    }

    createTodo(todo: CreateTodoDto) {
        this.todos.push(todo)
        return this.todos
    }

    updateTodoById(id: number, newTodo: UpdateTodoDto) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, ...newTodo }
            }
            return todo
        })            
    }

    deleteTodoById(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id)
        return this.todos
    }
}
