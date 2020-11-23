class Account {
  /**
   *
   * @param {String} username Username
   * @param {Semester[]} semesters array of Semesters
   */
  constructor(username = null, semesters = null) {
    this.username = username
    this.semesters = semesters
    this.cgpa = null
  }

  /**
   * @returns {Number} cummulated cgpa.
   */
  getcgpa() {
    let totalUnits = 0
    let totalCreditPoints = 0
    this.semesters.forEach((semester) => {
      totalUnits += semester.totalUnits()
      totalCreditPoints += semester.totalCreditPoints()
    })
    return totalCreditPoints / totalUnits
  }
}

export class Semester {
  /**
   * @param {String} semName  semester name
   * @param {Course[]} courses array of course objects
   */
  constructor(semName = null, courses = null) {
    this.semName = semName
    this.courses = courses
  }

  /**
   * @returns {Number} total number of units
   */
  totalUnits() {
    let units = 0
    this.courses.forEach((course) => {
      units += course.unit * 1
    })
    return units
  }

  /**
   * @returns {Number} total credit points
   */
  totalCreditPoints() {
    let totalCreditPoints = 0
    this.courses.forEach((course) => {
      totalCreditPoints += course.creditPoints()
    })
    return totalCreditPoints
  }

  /**
   * @returns {Number} grade point average = tcp/tnu.
   */
  gpa() {
    return this.totalCreditPoints() / this.totalUnits()
  }
}

// just in case we decide to create a method for grading system later on

export class Course {
  constructor(coursename = null, unit = null, score = null) {
    this.coursename = coursename
    this.unit = unit
    this.score = score
  }

  // TODO: allow for multiple grading systems in app.
  // csystem(classif) {
  //   let systems = {
  //     "5unit": { A: 5, B: 4, C: 3, D: 2, E: 1, F: 0 },
  //   };
  //   return systems[classif];
  // }

  /**
   * @returns {Number} Grade point based on grade letter
   */
  grade() {
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

  /**
   * @returns {Number} credit points: units * grade point
   */
  creditPoints() {
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

/**
 * @type {Account}
 */
let savedAccount = null
if (localStorage) {
  savedAccount = JSON.parse(localStorage.getItem('user-0'))
  if (savedAccount !== null) {
    for (var i = 0; i < savedAccount.semesters.length; i++) {
      semesters[i] = Object.assign(new Semester(), savedAccount.semesters[i])
      let tempcourses = []
      for (var j = 0; j < savedAccount.semesters[i].courses.length; j++) {
        tempcourses[j] = Object.assign(
          new Course(),
          savedAccount.semesters[i].courses[j]
        )
      }
      semesters[i].courses = tempcourses
      tempcourses = []
    }
  }
}
// converting d semesters and courses
let activeAccount =
  savedAccount !== null
    ? Object.assign(new Account(), savedAccount)
    : new Account(null, semesters)
activeAccount.semesters = semesters
let accounts = [activeAccount]

export default {
  courses: courses,
  semesters: semesters,
  accounts: accounts,
  activeAccount: activeAccount,
  course() {
    return new Course()
  }
}
