import { EntityRepository, Repository } from 'typeorm';
import { Interview } from './interview.entity';
import { CreateInterviewDto } from './dto/create-interview-dto';

@EntityRepository(Interview)
export class InterviewRespository extends Repository<Interview> {
  async createInterview(
    createInterviewDTO: CreateInterviewDto,
  ): Promise<Interview> {
    const { description, title } = createInterviewDTO;

    const interview = new Interview();
    interview.description = description;
    interview.title = title;
    await interview.save();

    return interview;
  }
}
