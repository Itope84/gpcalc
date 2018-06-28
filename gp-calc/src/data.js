class Account {
  // constructors default to null
  constructor (username = null, semesters = null, classif = '5unit') {
    this.username = username
    this.semesters = semesters
    this.classif = classif
    this.cgpa = null
  }

  getcgpa () {
    let tnu = 0
    let tcp = 0
    this.semesters.forEach((semester) => {
      tnu += semester.tnu()
      tcp += semester.tcp(this.classif)
    })
    return tcp / tnu
  }
}

export class Semester {
  constructor (semName = null, courses = null) {
    this.semName = semName
    this.courses = courses
  }

  tnu () {
    let units = 0
    this.courses.forEach((course) => { units += course.unit * 1 })
    return units
  }

  tcp (classif) {
    let tcp = 0
    this.courses.forEach((course) => { tcp += course.cp(classif) })
    return tcp
  }
  // this loops twice, can it be optimised
  gpa (classif) {
    return this.tcp(classif) / this.tnu()
  }
}

// just in case we decide to create a method for grading system later on

export class Course {
  constructor (coursename = null, unit = null, score = null) {
    this.coursename = coursename
    this.unit = unit
    this.score = score
  }

  csystem (classif) {
    let systems = {
      '5unit': {'A': 5, 'B': 4, 'C': 3, 'D': 2, 'E': 1, 'F': 0}
    }
    return systems.classif
  }

  grade () {
    if (this.score >= 70) {
      return 'A'
    } else if (this.score >= 60) {
      return 'B'
    } else if (this.score >= 50) {
      return 'C'
    } else if (this.score >= 45) {
      return 'D'
    } else if (this.score >= 40) {
      return 'E'
    } else {
      return 'F'
    }
  }

  cp () {
    switch (this.grade()) {
      case 'A':
        return 5 * this.unit
      case 'B':
        return 4 * this.unit
      case 'C':
        return 3 * this.unit
      case 'D':
        return 2 * this.unit
      case 'E':
        return 1 * this.unit
      default:
        return 0 * this.unit
    }
  }
}

let courses = [new Course()]
let semesters = [new Semester(null, courses)]
let savedAccount = null
if (localStorage) {
  savedAccount = JSON.parse(localStorage.getItem('user-0'))
  if (savedAccount !== null) {
    savedAccount.semesters.forEach((semester, index) => {
      semesters[index] = Object.assign(new Semester(), semester)
      semesters[index].courses.forEach((course, j) => {
        courses[j] = Object.assign(new Course(), course)
      })
      semesters[index].courses = courses
    })
  }
}
// converting d semesters and courses
let activeAccount = savedAccount !== null ? Object.assign(new Account(), savedAccount) : new Account(null, semesters)
activeAccount.semesters = semesters
let accounts = [activeAccount]

export default {
  courses: courses,
  semesters: semesters,
  accounts: accounts,
  activeAccount: activeAccount,
  course () {
    return new Course()
  }
}
