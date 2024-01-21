export class CreateTodoDto {
  title: string;
  description: string;
  status: 'todo' | 'inprogress' | 'done';
}
