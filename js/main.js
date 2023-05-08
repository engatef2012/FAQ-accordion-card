const questions = document.querySelectorAll(".question");
questions.forEach((question) => {
  question.addEventListener("click", (e) => {
    let answer = e.target.nextElementSibling;
    if (e.target.parentElement.open) {
      e.target.parentElement = false;
    } else {
      questions.forEach((ele) => {
        ele.parentElement.open = false;
      });
    }
  });
});
