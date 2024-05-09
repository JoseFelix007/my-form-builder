import { TextQuestion } from "./FormQuestionType";

export const buildFormQuestion = (type) => {
  switch (type) {
    case 'text':
      return TextQuestion;
    default:
      return null;
  }
};
