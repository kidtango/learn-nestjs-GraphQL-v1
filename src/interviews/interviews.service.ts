import { Injectable } from '@nestjs/common';
import { CreateInterviewDto } from './dto/create-interview-dto';
import { Interview } from '../graphql.schema';
import { InjectRepository } from '@nestjs/typeorm';
import { InterviewRespository } from './interview.repository';

@Injectable()
export class InterviewsService {
  constructor(
    @InjectRepository(InterviewRespository)
    private interviewRepository: InterviewRespository,
  ) {}

  // findAll(): Interview[] {
  //   return this.interviews;
  // }

  // findOneById(id: string): Interview {
  //   return this.interviews.find(interview => interview.id === id);
  // }

  async create(createInterviewDTO: CreateInterviewDto): Promise<Interview> {
    const interview = await this.interviewRepository.createInterview(
      createInterviewDTO,
    );

    return interview;
  }
}
