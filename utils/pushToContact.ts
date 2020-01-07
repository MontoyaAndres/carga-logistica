import scrollIntoView from "smooth-scroll-into-view-if-needed";

export function pushToContact() {
  const node = document.querySelector("#form");

  scrollIntoView(node, {
    scrollMode: "if-needed",
    block: "nearest",
    inline: "nearest"
  });
}
