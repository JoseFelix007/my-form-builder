import { TextQuestion } from "./FormQuestionType";

export const buildFormQuestion = (type) => {
  const question = {
    type: type,
    component: null
  };

  switch (type) {
    case 'text':
      question.component = TextQuestion;
      break;
    default:
      break;
  }

  return question;
};
