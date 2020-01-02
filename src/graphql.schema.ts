/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface CreateIntervieweeInput {
  name: string;
  bio: string;
  twitter: string;
}

export interface CreateInterviewInput {
  title: string;
  description: string;
  interviewees?: CreateIntervieweeInput[];
}

export interface Interview {
  id: number;
  title: string;
  description: string;
  interviewees?: Interviewee[];
}

export interface Interviewee {
  id: number;
  name: string;
  twitter: string;
  bio: string;
}

export interface IMutation {
  createInterview(
    createInterviewInput?: CreateInterviewInput,
  ): Interview | Promise<Interview>;
}

export interface IQuery {
  getInterviews(): Interview[] | Promise<Interview[]>;
  interview(id: string): Interview | Promise<Interview>;
}
