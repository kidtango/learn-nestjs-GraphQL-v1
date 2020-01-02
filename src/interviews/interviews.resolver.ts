import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { InterviewsService } from './interviews.service';
import { Interview, CreateInterviewInput } from 'src/graphql.schema';
import { CreateInterviewDto } from './dto/create-interview-dto';

@Resolver('Interview')
export class InterviewsResolver {
  constructor(private readonly interviewsService: InterviewsService) {}

  // @Query()
  // async getInterviews() {
  //   return await this.interviewsService.findAll();
  // }

  // @Query('interview')
  // async findOneById(@Args('id') id: string): Promise<Interview> {
  //   return this.interviewsService.findOneById(id);
  // }

  @Mutation()
  async createInterview(
    @Args('createInterviewInput') createInterviewDto: CreateInterviewDto,
  ): Promise<Interview> {
    return this.interviewsService.create(createInterviewDto);
  }
}
