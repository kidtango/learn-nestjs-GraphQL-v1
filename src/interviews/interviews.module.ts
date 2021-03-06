import { Module } from '@nestjs/common';
import { InterviewsResolver } from './interviews.resolver';
import { InterviewsService } from './interviews.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterviewRespository } from './interview.repository';

@Module({
  providers: [InterviewsResolver, InterviewsService],
  imports: [TypeOrmModule.forFeature([InterviewRespository])],
})
export class InterviewsModule {}
