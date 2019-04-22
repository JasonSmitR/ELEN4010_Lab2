'use strict'

let students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3
  },
  {
    name: 'Jade',
    studentNumber: 678343,
    yearOfStudy: 4
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4
  }
]

console.log(students)
console.log('\n')

const deleteStudent = function (studentToDelete, students) {
  let pos = students.findIndex(function (element) {
    return element.name === studentToDelete.name &&
        element.studentNumber === studentToDelete.studentNumber &&
        element.yearOfStudy === studentToDelete.yearOfStudy
  })
  if (pos > -1) {
    students.splice(pos, 1)
    return students
  } else {
    return students
  }
}

const modifiedArray = deleteStudent({
  name: 'Kiren',
  studentNumber: 567893,
  yearOfStudy: 3
}, students)
console.log(modifiedArray)
