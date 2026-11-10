const studentName = document.getElementById('name')
const studentClass = document.getElementById('studentClass')
const studentAttendanceNumber = document.getElementById('studentAttendanceN')

const studentAttendance = document.getElementById('studentAttendanceS')
const assignmentScore = document.getElementById('assignment')
const midtermScore = document.getElementById('midterm')
const finalExam = document.getElementById('final')

const submitButton = document.getElementById('submit')


submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const finalGrade = (assignmentScore.value * 0.3) + (midtermScore.value * 0.3) + (finalExam.value * 0.35) + (studentAttendance.value * 0.05)

    document.getElementById('studentn').innerText = studentName.value
    document.getElementById('studentc').innerText = studentClass.value
    document.getElementById('studentat').innerText = studentAttendanceNumber.value
    document.getElementById('studentatn').innerText = studentAttendance.value
    document.getElementById('studenta').innerText = assignmentScore.value
    document.getElementById('studentm').innerText = midtermScore.value
    document.getElementById('studentf').innerText = finalExam.value
    document.getElementById('studentanswere').innerText = finalGrade

    console.log(finalGrade)
})
let dis=document.getElementById('display');
        dis.addEventListener('click',function(){
            document.body.classList.toggle('light-mode');
            let modeT = document.body.classList.contains('light-mode');
})