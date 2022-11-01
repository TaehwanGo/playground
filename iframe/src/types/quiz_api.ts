type QuizType = "ox" | "multiple" | "short" | "long";

/**
 * 해당 차시 퀴즈 하나의 데이터
 * 퀴즈 목록은 Quiz[] 형태로 받아옴
 */
// interface Quiz {
//   id: string | number;
//   page_id: string | number;
//   group_id: string | number;
//   type: QuizType;
//   question: string; // 문제
//   choices?: QuizChoice[]; // 선택지
// }

interface QuizChoice {
  number: number;
  choice: string;
}

/**
 * 정답 확인 요청 시 전달되는 데이터
 */
export interface CheckQuizAnswerParams {
  subject_code: string; // 과목코드
  version_code: string; // 버전코드
  id: string | number;
  page_id: string | number;
  group_id: string | number;
  type: QuizType;
  answer: string;
}

/**
 * 정답 확인 응답 데이터
 */
export interface CheckQuizAnswer {
  id: string | number;
  is_correct: boolean;
  correct_answer: string;
  user_answer: string;
}

/**
 * 퀴즈 결과 목록 데이터
 */
export interface QuizResult {
  id: string | number;
  page_id: string | number;
  group_id: string | number;
  type: QuizType;
  question: string;
  choices?: QuizChoice[];
  correct_answer: string;
  user_answer: string;
  is_correct: boolean;
}
