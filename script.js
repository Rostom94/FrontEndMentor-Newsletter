let success_status = false;

const btn_desktop = document.querySelector("#btn_submit");
const btn_reset = document.querySelector("#btn_reset");

const success_msg = document.querySelector(".success");
const form = document.querySelector(".wrapper");

btn_desktop.addEventListener("click", () => {
  success_msg.setAttribute("style", "display: block");
  form.setAttribute("style", "display: none");
});

btn_reset.addEventListener("click", () => {
  success_msg.setAttribute("style", "display: none");
  form.setAttribute("style", "display: flex");
});
