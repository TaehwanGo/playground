async function save_progress(param) {
  console.log("save_progress", param);
}

async function save_video_progress(param) {
  console.log("save_video_progress", param);
}

async function save_quiz_progress(param) {
  console.log("save_quiz_progress", param);
}

async function get_memo(param) {
  console.log("getMemoByEntryId", param);
  return `memo from callback entry id: ${param.id} group id: ${param.group_id}`;
}

async function post_memo(param) {
  console.log("postMemo", param);
}

async function post_question_with_files(param) {
  console.log("save_quiz_progress", param);
}

async function get_html_string_data(url) {
  console.log("get_html_string_data", url);
  return `<div>html data from callback url: ${url}</div>`;
}

async function save_last_entry_data(param) {
  console.log("save_last_entry_data", param);
}

const initialAppData = {
  id: 1, // 앱 seq_id
  title: "[상시] 미디어 크리에이터 교육과정 수업이름이 길어지면", // 통합 학습 제목
  logo: "/src/images/logo.png", // 사이트 로고
  error_url: "https://www.step.or.kr/usrs/faq/UsrsFaqListForm.do", // lms 오류 신고 페이지로 이동
  question_url: "http://localhost:4000/api/v1/upload", // 문의하기 api url
  note_url: "http://localhost:4000/api/v1/memo", // 메모 api url
  save_url: "http://localhost:4000/api/v1/save", // 저장 api url
  hidden_frame_url: "https://www.bubblecon.io/", // hidden frame url
  is_sequence: false,
  subject_code: "1234", // 과목 코드
  version_code: "asdf", // 버전 코드
  interval_term_save_progress: 3,
  last_entry_data: {
    group_id: "b",
    entry_id: "b-2",
    entry_type: "video",
    entry_title: "유튜브 기초 배우기",
  },
  entries: [
    {
      id: "a", // 회차 seq_id, group_id
      title: "1. 유튜브 계획하기", // 회차 제목
      is_next: true, // 다음 페이지 여부
      entries: [
        {
          id: "a-0", // 강의 seq_id, page_id
          group_id: "a", // 회차 seq_id,
          title: "1-0. 퀴즈",
          is_completed: false, // 학습 완료 여부
          // is_completed: false, // 학습 완료 여부
          is_next: true, // 다음 페이지 여부
          datas: {
            type: "quiz", // 콘텐츠 타입
            quizList: [
              {
                id: 1,
                page_id: "a-0",
                group_id: "a",
                type: "multiple",
                question: "유튜브 계획하는 방법으로 옳지 않은 것은?", // 문제
                choices: [
                  {
                    number: 1,
                    choice: "다른 채널명과 중복되면 안된다.",
                  },
                  {
                    number: 2,
                    choice: "지속적으로 찍을 수 있는 영상이어야 한다.",
                  },
                  {
                    number: 3,
                    choice: "내가 유튜브를 시작하는 이유는 무엇인지 적어본다.",
                  },
                  {
                    number: 4,
                    choice:
                      "모든 사람을 나의 타겟층으로 해야 전체성이 뚜렷해진다.",
                  },
                  {
                    number: 5,
                    choice: "채널에 나오는 나의 캐릭터 및 컨셉을 잡는다.",
                  },
                ], // 선택지
                user_answer: undefined,
                // user_answer: {
                //   number: 5,
                //   choice: "채널에 나오는 나의 캐릭터 및 컨셉을 잡는다.",
                // },
                answer: {
                  number: 4,
                  choice:
                    "모든 사람을 나의 타겟층으로 해야 전체성이 뚜렷해진다.",
                }, // 정답
                answer_explanation:
                  "유튜브를 계획 할 때는 다른 채널명과 중복되지 않는게 좋다. 유튜브를 계획 할 때는 다른 채널명과 중복되지 않는게 좋다. 유튜브를 계획 할 때는 다른 채널명과 중복되지 않는게 좋다. 유튜브를 계획 할 때는 다른 채널명과 중복되지 않는게 좋다. 유튜브를 계획 할 때는 다른 채널명과 중복되지 않는게 좋다. 유튜브를 계획 할 때는 다른 채널명과 중복되지 않는게 좋다.",
              },
              {
                id: 2,
                page_id: "a-0",
                group_id: "a",
                type: "ox",
                question: "유튜브를 계획할 때는 다른 채널명과 중복되면 안된다.", // 문제
                user_answer: undefined,
                // user_answer: "O", // 사용자가 선택한 답
                answer: "O", // 정답
                answer_explanation:
                  "유튜브를 계획 할 때는 다른 채널명과 중복되지 않는게 좋다. 유튜브를 계획 할 때는 다른 채널명과 중복되지 않는게 좋다. 유튜브를 계획 할 때는 다른 채널명과 중복되지 않는게 좋다. 유튜브를 계획 할 때는 다른 채널명과 중복되지 않는게 좋다. 유튜브를 계획 할 때는 다른 채널명과 중복되지 않는게 좋다. 유튜브를 계획 할 때는 다른 채널명과 중복되지 않는게 좋다.",
              },
              {
                id: 3,
                page_id: "a-0",
                group_id: "a",
                type: "short",
                question: [
                  "유튜브 계획하기 중 한 방법으로 채널에 나오는 나의 유튜브 계획하기 중 한 방법으로 채널에 나오는 나의 유튜브 계획하기 중 한 방법으로",
                  "*blank*",
                  "채널은?",
                ],
                user_answer: undefined,
                // user_answer: "캐릭터2", // 사용자가 선택한 답
                answer: "캐릭터", // 정답
                answer_explanation: "캐릭터에 대한 해설1",
              },
              {
                id: 5,
                page_id: "a-0",
                group_id: "a",
                type: "long",
                question:
                  "유튜브 계획하기에 대한설명으로 6가지 이상 서술하시오.", // 문제
                user_answer: undefined, // 사용자가 선택한 답
                // user_answer:
                //   "서술형 사용자가 제출한 답 서술형 사용자가 제출한 답", // 사용자가 선택한 답
                answer:
                  "서술형 정답 예시 서술형 정답 예시 서술형 정답 예시 서술형 정답 예시 서술형 정답 예시 서술형 정답 예시",
                answer_explanation:
                  "첫째, 유튜브 콘텐츠의 엄청난 다양성과 높은 품질은 전 세계 사람들이 가진 가지각색의 모든 취향을 다 만족시킬 수 있다. 한정된 자원과 일방적인 공급을 토대로 한 TV방송이 유튜브의 다양성을 따라가는 건 불가능한 일이며 그 격차는 점점 더 벌어지고 있다. 수년 전만 해도 조약한 수준의 유튜브 콘텐츠가 적지 않았지만 근래 들어 TV 방송보다 더 뛰어난 품질의 콘텐츠도 다수 등장하고 있다.",
              },
            ], // 퀴즈 리스트
          },
        },
        {
          id: "a-1", // 강의 seq_id
          group_id: "a", // 회차 seq_id,
          title: "1-1. 유튜브 계획하기",
          is_completed: false, // 학습 완료 여부
          is_next: true, // 다음 페이지 여부
          datas: {
            type: "html_data", // 콘텐츠 타입
            src: "http://localhost:4000/api/v1/html", // 내용이 담긴 html url
            time_to_complete: 140,
            last_learning_time: 0,
          },
        },
        {
          id: "a-2-1",
          group_id: "a", // 회차 seq_id,
          title: "1-2-1. 유튜브",
          is_completed: false,
          is_next: true, // 다음 페이지 여부
          datas: {
            type: "video",
            src: "https://www.youtube.com/watch?v=n4YXauObskA", // 동영상 플레이어 url. player load시 query string을 통하여 데이터를 넘겨주어야 할 수 있음
            contexts: {
              // lxPlayer init parameter. xAPI 수집을 위한 추가적인 정보 기입
              name: "홍길동", // 학습자 이름
              homepage: "http://lms_domain", // lms domain
              baseurl: "http://xAPI_iri", // xapi activity_id
              stateId: "http://xAPI_state_id", // xapi state id
              lrsUrl: "http://lrs_url", // lrs url
              object_context: {
                "https://xapi_iri": "vod",
              },
              result_extensions: {
                "https://xapi_iri": 3,
              },
              context_details: {
                revision: "1.0",
              },
              extension_details: {
                "https://xapi_iri": "lms",
              },
              content_name: "동영상 이름", // 동영상 제목
              description: "동영상 설명", // 동영상 설명, 추가 설명
              watermark: "/assets/image/bbcon_water.png", // 워터 마크 url
              playback_rate: [1, 1.2, 1.5, 1.8, 2], // 재생 속도 설정
              control_bar: true,
              forward_btn: true, // 10초 앞으로 감기
              rewind_btn: true, // 10초 뒤로 감기
              last_learning_time: 0,
              bookmarks: [],
            },
            content: "https://www.bubblecon.io/", // 내용이 담긴 html url
          },
        },
        {
          id: "a-2",
          group_id: "a", // 회차 seq_id,
          title: "1-2. 유튜브 기초 배우기",
          is_completed: false,
          is_next: true, // 다음 페이지 여부
          datas: {
            type: "video",
            src: "https://cdn.bubblecon.io/videos/45.mp4", // 동영상 플레이어 url. player load시 query string을 통하여 데이터를 넘겨주어야 할 수 있음
            contexts: {
              // lxPlayer init parameter. xAPI 수집을 위한 추가적인 정보 기입
              name: "홍길순", // 학습자 이름
              homepage: "http://lms_domain", // lms domain
              baseurl: "http://xAPI_iri", // xapi activity_id
              stateId: "http://xAPI_state_id", // xapi state id
              lrsUrl: "http://lrs_url", // lrs url
              object_context: {
                "https://xapi_iri": "vod",
              },
              result_extensions: {
                "https://xapi_iri": 3,
              },
              context_details: {
                revision: "1.0",
              },
              extension_details: {
                "https://xapi_iri": "lms",
              },
              content_name: "동영상 이름", // 동영상 제목
              description: "동영상 설명", // 동영상 설명, 추가 설명
              watermark: "/assets/image/bbcon_water.png", // 워터 마크 url
              playback_rate: [], // 재생 속도 설정
              control_bar: false,
              forward_btn: false, // 10초 앞으로 감기
              rewind_btn: false, // 10초 뒤로 감기
              last_learning_time: 0,
              bookmarks: [],
              previewTime: 5,
            },
            content: "https://www.bubblecon.io/", // 내용이 담긴 html url
          },
        },
        {
          id: "a-3",
          group_id: "a", // 회차 seq_id,
          title: "1-3. 유튜브 성공하기",
          is_completed: false,
          is_next: false,
          datas: {
            type: "file", // 전체 다운로드 기능 필요
            files: [
              {
                title: "유튜브를 계획하는 방법.png", // 다운로드 파일 이름
                src: `%PUBLIC_URL%/assets/image/bbcon_water.png`, // 다운로드 파일 src
              },
              {
                title: "유튜브 성공하기.png",
                src: `%PUBLIC_URL%/assets/image/favicon.ico`,
              },
            ],
          },
        },
      ],
    },
    {
      id: "b", // 회차 seq_id
      title: "2. 유튜브 계획하기", // 회차 제목
      is_next: true, // 다음 페이지 여부
      entries: [
        {
          id: "b-1", // 강의 seq_id
          group_id: "b", // 회차 seq_id,
          title: "2-1. 유튜브 계획하기",
          is_completed: false, // 학습 완료 여부
          is_next: true, // 다음 페이지 여부
          datas: {
            type: "html_url", // 콘텐츠 타입
            src: "https://www.bubblecon.io/", // 내용이 담긴 html url
            time_to_complete: 5,
            last_learning_time: 0,
          },
        },
        {
          id: "b-2",
          group_id: "b", // 회차 seq_id,
          title: "2-2. 유튜브 기초 배우기",
          is_completed: false,
          is_next: true, // 다음 페이지 여부
          datas: {
            type: "video",
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", // 동영상 플레이어 url. player load시 query string을 통하여 데이터를 넘겨주어야 할 수 있음
            contexts: {
              // lxPlayer init parameter. xAPI 수집을 위한 추가적인 정보 기입
              name: "홍길동", // 학습자 이름
              homepage: "http://lms_domain", // lms domain
              baseurl: "http://xAPI_iri", // xapi activity_id
              stateId: "http://xAPI_state_id", // xapi state id
              lrsUrl: "http://lrs_url", // lrs url
              object_context: {
                "https://xapi_iri": "vod",
              },
              result_extensions: {
                "https://xapi_iri": 3,
              },
              context_details: {
                revision: "1.0",
              },
              extension_details: {
                "https://xapi_iri": "lms",
              },
              content_name: "동영상 이름", // 동영상 제목
              description: "동영상 설명", // 동영상 설명, 추가 설명
              watermark: "/assets/image/bbcon_water.png", // 워터 마크 url
              playback_rate: [1, 1.2, 1.5, 1.8, 2], // 재생 속도 설정
              control_bar: true,
              forward_btn: true, // 10초 앞으로 감기
              rewind_btn: true, // 10초 뒤로 감기
              last_learning_time: 0,
              bookmarks: [],
            },
            content: "https://www.bubblecon.io/", // 내용이 담긴 html url
          },
        },
        {
          id: "b-3",
          group_id: "b", // 회차 seq_id,
          title: "2-3. 유튜브 성공하기",
          is_completed: false,
          is_next: false,
          datas: {
            type: "file", // 전체 다운로드 기능 필요
            files: [
              {
                title: "유튜브를 계획하는 방법", // 다운로드 파일 이름
                src: "http://www.naver.com/1.mp4", // 다운로드 파일 src
              },
              {
                title: "유튜브 성공하기",
                src: "http://www.naver.com/2.mp4",
              },
            ],
          },
        },
      ],
    },
    {
      id: "c", // 회차 seq_id
      title: "3. 유튜브 계획하기", // 회차 제목
      is_next: true, // 다음 페이지 여부
      entries: [
        {
          id: "c-1", // 강의 seq_id
          group_id: "c", // 회차 seq_id,
          title: "3-1. 유튜브 계획하기",
          is_completed: false, // 학습 완료 여부
          is_next: true, // 다음 페이지 여부
          datas: {
            type: "html_url", // 콘텐츠 타입
            src: "https://www.bubblecon.io/", // 내용이 담긴 html url
            time_to_complete: 5,
            last_learning_time: 0,
          },
        },
        {
          id: "c-2",
          group_id: "c", // 회차 seq_id,
          title: "3-2. 유튜브 기초 배우기",
          is_completed: false,
          is_next: true, // 다음 페이지 여부
          datas: {
            type: "video",
            src: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", // 동영상 플레이어 url. player load시 query string을 통하여 데이터를 넘겨주어야 할 수 있음
            contexts: {
              // lxPlayer init parameter. xAPI 수집을 위한 추가적인 정보 기입
              name: "홍길동", // 학습자 이름
              homepage: "http://lms_domain", // lms domain
              baseurl: "http://xAPI_iri", // xapi activity_id
              stateId: "http://xAPI_state_id", // xapi state id
              lrsUrl: "http://lrs_url", // lrs url
              object_context: {
                "https://xapi_iri": "vod",
              },
              result_extensions: {
                "https://xapi_iri": 3,
              },
              context_details: {
                revision: "1.0",
              },
              extension_details: {
                "https://xapi_iri": "lms",
              },
              content_name: "동영상 이름", // 동영상 제목
              description: "동영상 설명", // 동영상 설명, 추가 설명
              watermark: "/assets/image/bbcon_water.png", // 워터 마크 url
              playback_rate: [1, 1.2, 1.5, 1.8, 2], // 재생 속도 설정
              control_bar: true,
              forward_btn: true, // 10초 앞으로 감기
              rewind_btn: true, // 10초 뒤로 감기
              last_learning_time: 0,
              bookmarks: [],
            },
            content: "https://www.bubblecon.io/", // 내용이 담긴 html url
          },
        },
        {
          id: "c-3",
          group_id: "c", // 회차 seq_id,
          title: "3-3. 유튜브 성공하기",
          is_completed: false,
          is_next: false,
          datas: {
            type: "file", // 전체 다운로드 기능 필요
            files: [
              {
                title: "유튜브를 계획하는 방법", // 다운로드 파일 이름
                src: "http://www.naver.com/1.mp4", // 다운로드 파일 src
              },
              {
                title: "유튜브 성공하기",
                src: "http://www.naver.com/2.mp4",
              },
            ],
          },
        },
      ],
    },
  ],
};

const DATA_OBJECT = {
  callbacks: {
    save_progress,
    save_video_progress,
    save_quiz_progress,
    get_memo,
    post_memo,
    post_question_with_files,
    get_html_string_data,
    save_last_entry_data,
  },
  initial_app_data: initialAppData,
};

window.DATA_OBJECT = DATA_OBJECT;

window.open("http://localhost:8080", "학습창", "width=1200, height=800");
