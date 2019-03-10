let student = {
  name: 'Kwezi',
  studentNumber: 453528
}
const addAge = function (theStudent, age) {
  theStudent.age = age // add a new property called age to the student
}

const addCourseCode = function (theStudent, courseCode) {
  theStudent.courseCode = courseCode
}

const addYear = function (theStudent) {
  if (theStudent.courseCode.charAt(5) === '0') { // .includes is not rubust as it purely check if a sub string exists
    const yearOffered = Number(theStudent.courseCode.charAt(4))
    theStudent.yearOffered = yearOffered
  } else {
    console.log('Error')
  }
}

const determineYear = function (courseCode) {
  if (courseCode.charAt(5) === '0') {
    const yearOffered = Number(courseCode.charAt(4))
    console.log(`${courseCode} is in year ${yearOffered}`)
    return yearOffered
  } else {
    console.log('Error: Not a valid input, course code should take the form XXXX1111')
  }
}
addAge(student, 20)
addCourseCode(student, 'ELEN4010')
addYear(student)
determineYear('CHMT3011')
console.log(student) // print the entire object
// access the object's properties
console.log(`${student.name}'s student number is ${student.studentNumber}`)
