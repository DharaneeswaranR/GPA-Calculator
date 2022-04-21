const contentEl = document.querySelector(".table")
const addCourseEl = document.getElementById("add-course")
const calculateBtnEl = document.getElementById("calculate-btn")
const resultEl = document.getElementById("result")

let marks = []
let credits = []
let grade = []
let gpa = 0

function getMarks() {
    const marksEl = document.querySelectorAll(".input-marks")

    for (let i = 0; i < marksEl.length; i++) {
        marks.push(parseInt(marksEl[i].value))
    }

    return marks
}

function getCredits() {
    const creditsEl = document.querySelectorAll(".input-credits")

    for (let i = 0; i < creditsEl.length; i++) {
        credits.push(parseInt(creditsEl[i].value))
    }

    return credits
}

function calGradePoints(marks) {
    if (marks < 0 || marks > 100)
        return NaN
    if (marks >= 90 && marks <= 100)
        return 10
    if (marks >= 80 && marks <= 89)
        return 9
    if (marks >= 70 && marks <= 79)
        return 8
    if (marks >= 60 && marks <= 69)
        return 7
    if (marks >= 50 && marks <= 59)
        return 6
}

function calGPA(grade, credits) {
    let sum = 0
    let totalCredits = 0

    for (let i = 0; i < grade.length; i++) {
        sum += grade[i] * credits[i]
        totalCredits += credits[i]
    }

    return sum / totalCredits
}

function renderResult(gpa) {
    if (gpa) {
        resultEl.textContent = gpa.toFixed(2)
    } else {
        resultEl.textContent = "Something's Wrong. Check your inputs."
    }
}

calculateBtnEl.addEventListener("click", () => {
    getMarks()
    getCredits()
    grade = marks.map(calGradePoints)
    gpa = calGPA(grade, credits)
    grade = []
    credits = []
    marks = []

    renderResult(gpa)
})

addCourseEl.addEventListener("click", () => {
    let newInput = document.createElement("div")
    newInput.setAttribute("class", "input-container")

    let inputMarks = document.createElement("input")
    inputMarks.setAttribute("type", "number")
    inputMarks.setAttribute("placeholder", "Marks out of 100")
    inputMarks.setAttribute("class", "input-marks")

    let inputCredits = document.createElement("input")
    inputCredits.setAttribute("type", "number")
    inputCredits.setAttribute("placeholder", "Credits")
    inputCredits.setAttribute("class", "input-credits")

    newInput.appendChild(inputMarks)
    newInput.appendChild(inputCredits)

    contentEl.appendChild(newInput)
})


