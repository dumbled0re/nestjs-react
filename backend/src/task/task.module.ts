import { Module } from '@nestjs/common';
import { TaskResolver } from './task.resolver';
import { TaskService } from './task.service';

// TaskModuleを作成する
@Module({
  providers: [TaskResolver, TaskService],
})
export class TaskModule {}
