
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateIntervieweeInput {
    name: string;
    bio: string;
    twitter: string;
}

export class CreateInterviewInput {
    title: string;
    description: string;
    interviewees?: CreateIntervieweeInput[];
}

export class Interview {
    id: number;
    title: string;
    description: string;
    interviewees?: Interviewee[];
}

export class Interviewee {
    id: number;
    name: string;
    twitter: string;
    bio: string;
}

export abstract class IMutation {
    abstract createInterview(createInterviewInput?: CreateInterviewInput): Interview | Promise<Interview>;
}

export abstract class IQuery {
    abstract getInterviews(): Interview[] | Promise<Interview[]>;

    abstract interview(id: string): Interview | Promise<Interview>;
}
