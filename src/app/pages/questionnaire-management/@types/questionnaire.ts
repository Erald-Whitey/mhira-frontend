import { TagInfo } from '../../../@shared/@modules/master-data/@types/list';

export enum QuestionnaireStatus {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
  PRIVATE = 'PRIVATE',
}

export interface ListQuestionnaireInput {
  language?: string;
  abbreviation?: string;
  license?: string;
  timeToComplete?: number;
  status?: QuestionnaireStatus;
}

export interface UpdateQuestionnaireInput {
  language: string;
  timeToComplete: number;
  license?: string;
  copyright: string;
  website?: string;
  status?: QuestionnaireStatus;
  keywords?: string[];
}

export interface CreateQuestionnaireInput extends UpdateQuestionnaireInput {
  excelFile: File;
}

export interface QuestionnaireVersion {
  _id: string;
  name: string;
  status: QuestionnaireStatus;
  createdAt: Date;
  keywords: string[];
  copyright: string;
  website: string;
  license: string;
  timeToComplete: number;
  questionnaire: {
    language: string;
    abbreviation: string;
  };
}

export interface FormattedQuestionnaireVersion extends QuestionnaireVersion {
  formattedStatus: TagInfo;
  formattedKeywords: TagInfo[];
  language: string;
  abbreviation: string;
}
