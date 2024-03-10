let question = document.querySelector(".question")
let option = document.querySelectorAll(".option")
let score = document.querySelector("span")
let next = document.querySelector(".next")
let msg = document.querySelector("#msg")
next.innerHTML = "start"
let scorepoints = 0
let click = 0
let userclick
function buttonsdisable(e) {
    option.forEach((button)=>{
        button.disabled = e
    })
}
buttonsdisable(true)
option.forEach((button)=>{
    
    button.addEventListener("click",(e)=>{
        userclick = e.target.innerHTML
        console.log(userclick)
       buttonsdisable(true)
       console.log(questions[click-1].answer)
       if(userclick===questions[click-1].answer){
        scorepoints++
        score.innerHTML = scorepoints
        e.target.style.backgroundColor = "green"
        msg.innerHTML = "Congrats. Right Answer"
       }
       else{
        e.target.style.backgroundColor = "red"
        msg.innerHTML = `OOps. wrong answer. the right answer is ${questions[click-1].answer}`
       }
    })
})
next.addEventListener("click",(e)=>{
    buttonsdisable(false)
    msg.innerHTML = " "
    next.innerHTML="next"
    if(click<10){
        option.forEach((button)=>{
            button.style.backgroundColor = "antiquewhite"
        })
        console.log(questions[click])
        question.innerHTML = questions[click].question
        for(i=0;i<4;i++){
            option[i].innerHTML = questions[click].options[i]
        }
        click++
    }
    else{
        next.disabled = true
        msg.innerHTML = "game completed"
    }
})