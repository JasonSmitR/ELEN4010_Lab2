'use strict'

const electiveOne = {
  courseCode: 'ELEN4010',
  yearOffered: 4
}
const electiveTwo = {
  courseCode: 'ELEN4001',
  yearOffered: 4
}
const electiveThree = {
  courseCode: 'ELEN4020',
  yearOffered: 4
}
const electiveFour = {
  courseCode: 'ELEN4017',
  yearOffered: 4
}
let students = [
  {
    name: 'Kwezi',
    studentNumber: 453528,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  },
  {
    name: 'Pieter',
    studentNumber: 454345,
    yearOfStudy: 3,
    electives: [electiveOne, electiveTwo, electiveFour]
  },
  {
    name: 'Jade',
    studentNumber: 678345,
    yearOfStudy: 4,
    electives: [electiveTwo, electiveThree, electiveFour]
  },
  {
    name: 'Kiren',
    studentNumber: 567893,
    yearOfStudy: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  }
]
// find 4th years doing ELEN4010
// use arrow functions + Array filter
const classSearch = function (year, theCourseCode, students) {
  // find all in year
  let arrayMatch = students.filter(el => el.yearOfStudy === year)
  // find all in course
  let result = checkT(arrayMatch.electives, theCourseCode)
  return result
}

function checkT (electives, theCourseCode) {
  electives.findIndex(function (element) {
    return element.courseCode === theCourseCode
  })
}

let classELEN4010 = classSearch(4, 'Elen4010', students)
console.log('\n')
console.log(classELEN4010)
