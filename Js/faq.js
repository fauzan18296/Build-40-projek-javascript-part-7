// Algoritma
// 1. Select all question
const questions = document.querySelectorAll(".question")
questions.forEach((question) => {
  console.log(question)
  // 2. ambil class button dengan menggunakan parameter question dari method loop yaitu foreach 
  let btn = question.querySelector(".question-btn")
  console.log(btn)
  btn.addEventListener("click",() => {
    // 3. disaat button di click maka question akan toggle atau beralih
    question.classList.toggle("show")
    questions.forEach((item) => {
          // 4. jika item tidak sama dengan question yang telah toggle maka class toggle pada question akan di remove dengan parameter item
        item !== question ? item.classList.remove("show"): console.log(item)
    })
  })
})
