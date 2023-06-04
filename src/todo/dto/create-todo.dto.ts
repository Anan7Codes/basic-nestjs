import { MaxLength, MinLength } from "class-validator";

export class CreateTodoDto {
    id: number;

    @MinLength(5)
    title: string;
    description: string;
    done: boolean;
}
