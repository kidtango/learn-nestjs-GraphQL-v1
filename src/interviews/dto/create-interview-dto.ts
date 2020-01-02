import {
  CreateInterviewInput,
  CreateIntervieweeInput,
} from 'src/graphql.schema';

export class CreateInterviewDto {
  // id: string;
  title: string;
  description: string;
  // interviewees: CreateIntervieweeInput[];
}
