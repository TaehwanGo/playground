export type QuizLayoutMode = "study" | "done" | "review";

export type QuizType = "ox" | "multiple" | "short" | "long";

export enum OX {
  O = "O",
  X = "X",
}

export type AnswerTypes = string | QuizChoice | OX;

export type Answer<T = AnswerTypes> = T;

export interface QuizChoice {
  number: number;
  choice: string;
}

export type QuestionBlank = (string | "*blank*")[];

/**
퀴즈 채점 상태
correct : 정답
incorrect : 오답
unanswered : 답을 입력하지 않음(문제풀기전)
pending: 채점중(서술형의 경우)
*/
export type QuizGradingState =
  | "correct"
  | "incorrect"
  | "unanswered"
  | "pending";

/**
 * unanswered : 아직 답을 입력하지 않은 상태 => 제출하기 버튼 비활성화
 * answered : 답을 입력했으나 제출하지 않은 상태 => 제출하기 버튼 활성화
 * submitted : 답을 제출한 상태 => 채점 화면 보여줌 + 답안 제출 대신 다음 문제 버튼
 */
export type QuizState = "unanswered" | "answered" | "submitted";

/**
 * 해당 차시 퀴즈 하나의 데이터
 * 퀴즈 목록은 Quiz[] 형태로 받아옴
 */
export interface Quiz<T = AnswerTypes> {
  id: string | number;
  page_id: string | number;
  group_id: string | number;
  type: QuizType;
  question: string | QuestionBlank; // 문제에서 빈칸
  choices?: QuizChoice[]; // 선택지
  user_answer?: Answer<T>; // 사용자가 선택한 답
  answer?: Answer<T>; // 정답 - long(서술형)은 정답이 없음
  grading?: QuizGrading<T>; // 퀴즈 채점 상태
  answer_explanation?: string; // 정답 설명
}

/**
 * 퀴즈 채점 상태
 */
export interface QuizGrading<T = AnswerTypes> {
  id: Quiz["id"];
  pageId: Quiz["page_id"];
  groupId: Quiz["group_id"];
  type: Quiz["type"];
  gradingState: QuizGradingState;
  userAnswer: Answer<T>;
  correctAnswer?: Answer<T>;
  solving_time: number;
}

/**
 * 유저가 제출한 답
 */
export interface UserAnswer<T = AnswerTypes> {
  id: Quiz["id"];
  page_id: Quiz["page_id"];
  group_id: Quiz["group_id"];
  type: Quiz["type"];
  answer: Answer<T>;
}

export interface QuizComponentCommonProps<T = AnswerTypes> {
  quizNumber: number;
  handlePrevQuiz: () => void;
  handleNextQuiz: () => void;
  handleSubmitQuiz: (userAnswer: UserAnswer<T>) => void;
  quizData: Quiz<T>;
  isFirstQuiz: boolean;
  isLastQuiz: boolean;
  handleConfirmDone: () => void;
  quizMode: QuizLayoutMode;
}
