import { EntityRepository, Repository } from 'typeorm';
import { InterviewEntity } from './interview.entity';
import { CreateInterviewDto } from './dto/create-interview-dto';

@EntityRepository(InterviewEntity)
export class InterviewRespository extends Repository<InterviewEntity> {
  async createInterview(
    createInterviewDTO: CreateInterviewDto,
  ): Promise<InterviewEntity> {
    const { description, title } = createInterviewDTO;

    const interview = new InterviewEntity();
    interview.description = description;
    interview.title = title;
    await interview.save();

    return interview;
  }
}
