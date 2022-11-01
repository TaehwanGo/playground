import {
  PREVIEW_VIDEO_END,
  VIDEO_END,
  VIDEO_PAUSE,
  VIDEO_PLAYBACK_RATE,
  VIDEO_START,
  VIDEO_TIME,
  VIDEO_VOLUME,
} from "../common/constants";

type VideoPlayerEvent =
  | typeof VIDEO_END
  | typeof VIDEO_TIME
  | typeof VIDEO_START
  | typeof VIDEO_PAUSE
  | typeof VIDEO_PLAYBACK_RATE
  | typeof VIDEO_VOLUME
  | typeof PREVIEW_VIDEO_END;

export interface PlayerIframeEvent {
  body: PlayerIframeEventBody;
  type: VideoPlayerEvent;
}

export interface PlayerIframeEventForUserCallback
  extends Omit<PlayerIframeEvent, "body"> {
  body: PlayerIframeEventBodyForUserCallback;
  type: VideoPlayerEvent;
}

interface PlayerIframeEventBody {
  total_time: number;
  current_time: number;
  percent: number;
  actualLearningTime: number; // message로 부터 넘어 올땐 ms 단위
  volume: number;
  playbackRate: number;
}

interface PlayerIframeEventBodyForUserCallback
  extends Omit<PlayerIframeEventBody, "actualLearningTime"> {
  actualLearningTime: ActualLearningTime;
}

interface ActualLearningTime {
  hours: number;
  mins: number;
  secs: number;
  ms: number;
}
