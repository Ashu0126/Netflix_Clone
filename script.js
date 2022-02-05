const select_ques = document.querySelectorAll(".ques");
const select_ans = document.querySelectorAll(".ans");
const select_cross = document.querySelectorAll(".questions div img");

//Select the Question's answer
function selectItem(e) {
  removeCross();
  removeActive();

  const sel_img = document.querySelector(`#img${this.id}`);
  sel_img.classList.add("active");

  const sel_ans = document.querySelector(`#ans${this.id}`);
  sel_ans.classList.add("active");
}

// listen for question click
select_ques.forEach((item) => item.addEventListener("click", selectItem));

//removing others
function removeCross() {
  select_cross.forEach((item) => item.classList.remove("active"));
}

function removeActive() {
  select_ans.forEach((item) => item.classList.remove("active"));
}
