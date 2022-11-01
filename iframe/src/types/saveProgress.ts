import { Entry } from "./dataObject";
import { QuizGradingState } from "./quiz";
import { PlayerIframeEvent } from "./videoPlayerEvent";

// 진도체크 관련 타입
export interface SaveHtmlProgressParam {
  id: string | number; // 해당 html(강의노트) 아이디
  group_id: string | number; // 해당 html이 속한 그룹 아이디
  is_completed: boolean; // html 학습 완료 여부
  title: string; // html 제목
  last_learning_time: number; // 실제 머무른 시간
}

// player에서 message를 받을 때
export interface SaveVideoProgressParam {
  currentEntry: Entry;
  data: PlayerIframeEvent;
}

// 통합플레이어 사용자로 부터 받은 콜백에 넘겨줄 parameter
export interface SaveVideoProgressParamForUserCallback {
  id: string | number; // 해당 비디오 아이디
  group_id: string | number; // 해당 비디오가 속한 그룹 아이디
  is_completed: boolean; // 비디오 시청 완료 여부
  title: string; // 비디오 제목
  total_time: number; // 비디오 총 길이
  last_learning_time: number; // currentTime: 마지막재생된 비디오 시간
  percent: number; // 비디오 시청한 비율
  actual_learning_time: number; // 실제 시청 시간
}

export interface SaveQuizProgressParam {
  id: string | number; // 해당 quiz 페이지 아이디
  group_id: string | number; // 해당 quiz가 속한 그룹 아이디
  subject_code: string; // 과목 코드
  version_code: string; // 버전 코드
  is_completed: boolean; // quiz 학습 완료 여부
  quiz_data: QuizData[];
}

export interface GetMemoParams {
  id: Entry["id"];
  group_id: Entry["group_id"];
}

export interface PostMemoParams {
  id: Entry["id"];
  group_id: Entry["group_id"];
  memo: string;
}

export interface PostQuestionWithFilesParams {
  id: Entry["id"];
  group_id: Entry["group_id"];
  question: string;
  files?: File[];
}

export interface QuizData {
  id: string | number;
  grading_state: QuizGradingState;
  correct_answer: string; // 객관식일때 number만
  user_answer: string;
  solving_time: number; // 초단위
}

// get_html_string_data
export interface GetHtmlStringDataParams {
  id: Entry["id"];
  group_id: Entry["group_id"];
}
