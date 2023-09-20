import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty } from 'class-validator';

// クラスをMutationの引数として使えるようにする
@InputType()
export class CreateTaskInput {
  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsDateString()
  dueDate: string;

  @Field({ nullable: true })
  description?: string;
}
