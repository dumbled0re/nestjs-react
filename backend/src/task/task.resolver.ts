import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateTaskInput } from './dto/createTask.input';
import { Task } from './models/task.model';
import { TaskService } from './task.service';

@Resolver()
export class TaskResolver {
  // DI（Dependency Injection）を使ってTaskServiceを注入する
  constructor(private readonly taskService: TaskService) {}

  // GraphQLのクエリを定義する
  @Query(() => [Task], { nullable: 'items' })
  getTasks(): Task[] {
    return this.taskService.getTasks();
  }

  @Mutation(() => Task)
  createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput): Task {
    return this.taskService.createTask(createTaskInput);
  }
}
