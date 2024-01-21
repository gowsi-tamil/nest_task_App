import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://gowsi:ncXEU2J3puENS6Bl@cluster0.plrul.mongodb.net/task_nest?retryWrites=true&w=majority',
    ),
    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
