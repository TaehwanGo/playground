import { DATA_OBJECT } from "./data/data.js";

const contentsPlayer =
  document.querySelector<HTMLIFrameElement>("#contentsPlayer");

// console.log("contentsPlayer?.contentWindow?", contentsPlayer?.contentWindow);

// contentsPlayer?.contentWindow?.postMessage("hello iframe", "*");

setTimeout(() => {
  contentsPlayer?.contentWindow?.postMessage(DATA_OBJECT, "*");
}, 2000);
