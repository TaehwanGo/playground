import { AnswerTypes, Quiz } from "./quiz";
import {
  GetMemoParams,
  PostMemoParams,
  PostQuestionWithFilesParams,
  SaveHtmlProgressParam,
  SaveQuizProgressParam,
  SaveVideoProgressParamForUserCallback,
} from "./saveProgress";

/**
 * 고객사로 부터 전달받는 데이터
 */
export interface DataObject {
  callbacks: Callbacks;
  initial_app_data: InitialAppData;
}

export interface Callbacks {
  save_html_progress: (param: SaveHtmlProgressParam) => Promise<void>; // 강의노트 진도 체크(저장)
  save_video_progress: (
    param: SaveVideoProgressParamForUserCallback
  ) => Promise<void>; // 동영상 진도 체크(저장)
  save_quiz_progress: (param: SaveQuizProgressParam) => Promise<void>;
  get_memo: (param: GetMemoParams) => Promise<string>; // 반드시 데이터(string)만 보내줘야합니다.
  post_memo: (param: PostMemoParams) => Promise<void>; // 응답값을 아무것도 보내지 않으셔도 됩니다
  post_question_with_files: (
    param: PostQuestionWithFilesParams
  ) => Promise<void>; // 응답값을 아무것도 보내지 않으셔도 됩니다
  save_last_entry_data: (param: LastEntryData) => Promise<void>;
}

export interface InitialAppData {
  id: string | number;
  title: string;
  logo: string;
  error_url: string;
  hidden_frame_url: string;
  is_sequence: boolean;
  entries: EntryTop[];
  last_entry_data: LastEntryData;
  interval_term_save_progress: number;
  subject_code: string;
  version_code: string;
}

export type EntryType = "html_url" | "html_string" | "video" | "file" | "quiz";

export interface LastEntryData {
  group_id: string | number;
  entry_id: string | number;
  entry_type: EntryType;
  entry_title: string;
}

export interface EntryTop {
  id: string | number;
  title: string;
  is_next: boolean;
  entries: Entry[];
}

export interface Entry<
  T = HTMLEntryData | VideoEntryData | FileEntryData | QuizEntryData
> {
  id: string | number;
  group_id: string | number;
  title: string;
  is_completed: boolean;
  is_next: boolean;
  datas: T;
}

export interface HTMLEntryData {
  type: Extract<EntryType, "html_string" | "html_url">;
  html?: string;
  src?: string; // type이 html_url일 경우에만 존재
  time_to_complete?: number;
  last_learning_time?: number;
}

export interface VideoEntryData {
  type: Extract<EntryType, "video">;
  src: string;
  contexts?: PlayerContexts;
  content?: string;
}

export interface FileEntryData {
  type: Extract<EntryType, "file">;
  files: FileData[];
}

export interface QuizEntryData<T = AnswerTypes> {
  type: Extract<EntryType, "quiz">;
  quizList: Quiz<T>[];
}

interface Bookmarks {
  time: number;
  text: string;
}
export interface PlayerContexts {
  name: string;
  homepage: string;
  baseurl: string;
  content_name: string;
  description: string;
  stateId: string;
  lrsUrl: string;
  watermark: string;
  playback_rate: number[];
  control_bar: boolean;
  forward_btn: boolean;
  rewind_btn: boolean;
  last_learning_time: number;
  previewTime?: number;
  bookmarks?: Bookmarks[];
  object_context: ObjectContext;
  result_extensions: ResultExtensions;
  context_details: ContextDetails;
  extension_details: ExtensionDetails;
}

export interface ObjectContext {
  [key: string]: string;
}

export interface ResultExtensions {
  [key: string]: string | number;
}

export interface ContextDetails {
  revision: string;
}

export interface ExtensionDetails {
  [key: string]: string;
}

export interface FileData {
  title: string;
  src: string;
}
