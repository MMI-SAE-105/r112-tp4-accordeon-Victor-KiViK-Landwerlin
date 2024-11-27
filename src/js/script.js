// *** ACCORDEON 
const accordeon = document.querySelector(".accordeon");

accordeon.addEventListener("click", (evt) => {
    if (evt.target.matches("summary, summary *")) {
    accordeon.querySelectorAll("details").forEach((det) => (det.open = false));
  }}
);
