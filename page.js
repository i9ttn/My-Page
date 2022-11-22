let imageler = Array.from(document.querySelectorAll(".split img"))
let imagelerLength = imageler.length
let counter = 1

let next = document.querySelector(".next")
let prev = document.querySelector(".prev")

next.addEventListener("click", function() {
    if(counter == imagelerLength) {
        return false
    } else {
        ++counter
    removeAndAdd()
    let lilength = ullar[counter - 1]
    lilength.classList.add("active")
    check1()
    }
})
prev.addEventListener("click", function() {
    if(counter == 1) {
        return false
    } else {
        --counter
    removeAndAdd()
    let lilength = ullar[counter - 1]
    lilength.classList.add("active")
    check1()
    }
}) 
let ul = document.querySelector(".function ul")
for(i = 1; i <= imagelerLength; i++) {
    let li = document.createElement("li")
    li.setAttribute("data-index", i)
    li.textContent = i
    ul.appendChild(li)
}
let ullar = Array.from(document.querySelectorAll(".function ul li"))
ullar[0].classList.add("active")
ullar.forEach(function(e) {
    e.addEventListener("click", () => {
        let elenght = Number(e.getAttribute("data-index"))
        counter = elenght
        removeAndAdd()
        e.classList.add("active")
        check1()
    })
})
let up = document.querySelector(".up")
window.onscroll = function() {
    if(this.scrollY > 100) {
        up.classList.add("show")
    } else {
        up.classList.remove("show")
    }
}
up.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
function check1() {
    if (counter > 1) {
        prev.classList.remove("disabeld")
    }
    if(counter == imagelerLength) {
        next.classList.add("disabeld")
    } else {
        next.classList.remove("disabeld")
    }
    if(counter == 1) {
        prev.classList.add("disabeld")
    } else{
        prev.classList.remove("disabeld")
    }
    if(counter == 1) {
        prev.classList.add("disabeld")
    } else{
        prev.classList.remove("disabeld")
    }
    if(counter == imagelerLength) {
        next.classList.add("disabeld")
    } else {
        next.classList.remove("disabeld")
    }
}
function removeAndAdd () {
    imageler.forEach(function(e) {
        e.classList.remove("active")
    })
    imageler[counter - 1].classList.add("active")
    ullar.forEach((e) => {
        e.classList.remove("active")
    })
}
const words = [
    "Hello",
    "Programming",
    "Code",
    "Javascript",
    "Town",
    "Country",
    "Testing",
    "Youtube",
    "Linkedin",
    "Twitter",
    "Github",
    "Leetcode",
    "Internet",
    "Python",
    "Scala",
    "Destructuring",
    "Paradigm",
    "Styling",
    "Cascade",
    "Documentation",
    "Coding",
    "Funny",
    "Working",
    "Dependencies",
    "Task",
    "Runner",
    "Roles",
    "Test",
    "Rust",
    "Playing"
];
let lvls = {
    "easy": 5,
    "normal": 4,
    "hard": 3,
}
let lvlsActive = document.querySelectorAll(".lvls p")
let easy = document.querySelector(".easy")
let normal = document.querySelector(".normal")
let hard = document.querySelector(".hard")
let start = document.querySelector(".start")
let spanLvl = document.querySelector(".level")
let spanSecound = document.querySelector(".secound")
let wordlar = document.querySelector(".words")
let wordsP = document.querySelector(".words p")
let word = document.querySelector(".word")
let from = document.querySelector(".from")
let score = document.querySelector(".score")
let timeLift = document.querySelector(".timeLift")
let input = document.querySelector("#inputWord")
let goodOrBad = document.querySelector(".goodOrBad")

let newArrayWords = new Array()
let newWord = ""
let timeActive = ""
function checkActive(e) {
    wordsP.style.display = "block"
    wordlar.style.display = "flex"
    goodOrBad.innerHTML = ""
    lvlsActive.forEach((e) => {
        e.classList.remove("active")
    })
    e.classList.add("active")
    let lvltur = e.classList[0]
    if(lvltur === "easy") {
        words.filter(function(e) {
            if(e.length <= 4) {
                newArrayWords.push(e)
            }
        })
        spanLvl.innerHTML = "EASY"
        spanSecound.innerHTML = lvls['easy']
    }
    if(lvltur === "normal") {
        words.filter(function(e) {
            if(e.length > 4 && e.length <= 6) {
                newArrayWords.push(e)
            }
        })
        spanLvl.innerHTML = "EASY"
        spanSecound.innerHTML = lvls['easy']
    }
    if(lvltur === "hard") {
        words.filter(function(e) {
            if(e.length > 7) {
                newArrayWords.push(e)
            }
        })
        spanLvl.innerHTML = "EASY"
        spanSecound.innerHTML = lvls['easy']
    }
    start.onclick = function() {
        this.style.display = "none"
        wordsP.style.display = "none"
        from.innerHTML = newArrayWords.length
        score.innerHTML = 0
        check()
        pushInWords()
    }
}
function pushInWords() {
    newWord = newArrayWords[Math.floor(Math.random() * newArrayWords.length)];
    newArrayWords.splice(newArrayWords.indexOf(newWord), 1);
    for(i = 0; i < newArrayWords.length; i++) {
        let div = document.createElement("div");
        div.innerHTML = newArrayWords[i]
        wordlar.appendChild(div)
    }
    word.innerHTML = newWord 
    setTime()
}
function setTime() {
    timeActive = ""
    for(i= 0; i < lvlsActive.length; i++) {
        if(lvlsActive[i].classList[1] === "active") {
            timeActive = lvls[lvlsActive[i].classList[0]]
        }
    }
    timeLift.innerHTML = timeActive
    let counter = setInterval(() => {
        timeLift.textContent--
        if(timeLift.textContent == 0) {
            clearInterval(counter)
            if(input.value.toLowerCase() == newWord.toLowerCase()) {
                score.textContent++
                goodOrBad.innerHTML = "Good"
                input.value = ""
                let wordlarDivs = document.querySelectorAll(".words div")
                wordlarDivs.forEach((e) =>{
                    e.style.display = "none"
                })
                if(newArrayWords.length > 0) {
                    pushInWords()
                } else {
                    wordlar.style.display = "none"
                    goodOrBad.innerHTML = "Nice"
                    input.style.display = "none"
                    word.style.display = "none"
                }
                
            } else {
                goodOrBad.innerHTML = "Bad"
                lvlsActive.forEach((e) => {
                    e.classList.remove("active")
                    e.style.display = "block"
                    window
                })
                word.innerHTML = ""
                start.style.display = "block"
                let wordlarDivs = document.querySelectorAll(".words div")
                wordlarDivs.forEach((e) =>{
                    e.style.display = "none"
                })
                wordlar.style.display = "none"
                reload()
            }
        }
    }, 1000)
}
function reload() {
    location.reload()
}
function check() {
    lvlsActive.forEach((e) => {
            if(e.classList[1] !== "active") {
                e.style.display = "none"
            }
        })
}
easy.onclick = function() {
    checkActive(this)
}
normal.onclick = function() {
    checkActive(this)
}
hard.onclick = function() {
    checkActive(this)
}