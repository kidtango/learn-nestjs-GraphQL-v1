import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { InterviewsModule } from './interviews/interviews.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
    }),
    InterviewsModule,
    TypeOrmModule.forRoot(typeOrmConfig),
  ],
})
export class AppModule {}
