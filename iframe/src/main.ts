import { DATA_OBJECT } from "./data/data.js";

const contentsPlayer =
  document.querySelector<HTMLIFrameElement>("#contentsPlayer");

// console.log("contentsPlayer?.contentWindow?", contentsPlayer?.contentWindow);

// contentsPlayer?.contentWindow?.postMessage("hello iframe", "*");

setTimeout(() => {
  contentsPlayer?.contentWindow?.postMessage(
    {
      type: "initial_app_data",
      data: DATA_OBJECT.initial_app_data,
    },
    "*"
  );
}, 2000);

window.addEventListener("message", (event) => {
  console.log("event.data", event.data);
});
