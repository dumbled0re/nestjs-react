import { Field, Int, ObjectType } from '@nestjs/graphql';

// モデルからGraphQLのスキーマを生成する
@ObjectType()
export class Task {
  // TypeScriptの型をGraphQLの型に変換する
  // TSのnumber型はデフォルトではfloatに変換されるので、直接Int型を指定する
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  dueDate: String;

  @Field()
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'DONE';

  // nullable: trueを指定すると、nullを許容する
  @Field({ nullable: true })
  description: string;
}
