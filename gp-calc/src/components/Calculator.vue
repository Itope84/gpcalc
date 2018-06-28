<template>
  <div>
    <div class="card">
      <header class="card-header">
        <h4 class="card-header-title">
          Computing for <span class="text-primary-colored">&nbsp;{{activeAccount.username ? activeAccount.username : "Default User"}}</span>
        </h4>
        <a href="#" class="card-header-icon" aria-label="more options">
          <span class="icon">
            <span class="icon-shuffle is-large"></span>
          </span>
        </a>
      </header>
      <div class="card-content">
        <p id="editSem">Change semester, edit a semester or add new semesters</p>
        <div class="columns is-mobile">
          <div class="field column is-10 is-flex">
            <div class="control has-icons-left">
              <div class="select">
                <select v-model="activeSem">
                  <option selected>Select Semester</option>
                  <option v-for="(semester, index) in activeAccount.semesters" :value="activeAccount.semesters[index]">{{semester.semName ? semester.semName : "Semester "+(index+1)}}</option>
                </select>
              </div>
              <div class="icon is-small is-left">
                <span class="icon-border_color"></span>
              </div>
            </div>

            <a class="button" @click="displayAddSem" style="margin-left: .5rem">
                <span class="icon-mode_edit"></span>
            </a>
          </div>

          <div class="column">
            <p class="buttons is-flex">
              
              <a class="button ml-auto bg-secondary">
                <span class="icon-visibility" @click="showgp"></span>
              </a>
              
            </p>
            
          </div>
        </div>

        <table class="table is-fullwidth">
          <caption>Enter Your Courses</caption>
          <thead>
            <tr>
              <th scope="col">Course</th>
              <th scope="col">Units</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(course, index) in activeSem.courses">

              <td scope="row" data-label="Course">
                <div class="field">
                  <p class="control has-icons-right">
                    <input class="input course-input" type="text" v-model="course.coursename">
                    <span class="icon is-small is-right">
                      <span class="icon-mode_edit"></span>
                    </span>
                  </p>
                </div>
              </td>
              <td data-label="Units">
                <div class="field">
                  <p class="control has-icons-right">
                    <input class="input course-input" type="number" v-model="course.unit">
                    <span class="icon is-small is-right">
                      <span class="icon-mode_edit"></span>
                    </span>
                  </p>
                </div>
              </td>
              <td data-label="Score">
                <div class="field">
                  <p class="control has-icons-right">
                    <input class="input course-input" type="number" v-model="course.score">
                    <span class="icon is-small is-right">
                      <span class="icon-mode_edit"></span>
                    </span>
                  </p>
                </div>
              </td>

              <!-- <button class="delete" aria-label="close" style="position: absolute; right: " @click="showAddSem = false"></button> -->

            </tr>
                
          </tbody>
          
        </table>

        <p class="buttons is-fullwidth">
          <button class="button ml-auto mr-auto" @click="addCourse">Add Course</button>

          <a class="button ml-auto mr-auto" @click="displayAddSem">Change semester</a>

          <button class="button ml-auto mr-auto" @click="save">Save Results</button>

          
        </p>

        <p class="is-flex">
          <button class="button ml-auto mr-auto bg-secondary" @click="showgp">View CGPA</button>
        </p>
        

      </div>
    </div>

    <!-- Modals -->
    <!-- Add new semester -->
    <div class="modal" style="display: flex" v-if="showAddSem">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Add New Semesters</p>
          <button class="delete" aria-label="close" @click="showAddSem = false"></button>
        </header>
        <section class="modal-card-body">
          <p>All Semesters</p>

          <div class="semester-list-item" v-for="(semester, index) in activeAccount.semesters">
            <div class="field is-flex is-vcentered is-fullwidth">
              <p class="control has-icons-left has-icons-right">
                <input class="input course-input" type="text" v-model="semester.semName" :placeholder="'Semester '+(index+1)">
                <span class="icon is-small is-left">
                  <span class="icon-mode_edit"></span>
                </span>
              </p>
              
              <button class="delete" aria-label="close" style="margin-left: .5rem" @click="deleteSem(index)"></button>
            </div>
            
            <div class="field is-grouped is-grouped-multiline">
              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-dark">Courses:</span>
                  <span class="tag is-info">{{semester.courses.length}}</span>
                </div>
              </div>

              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-dark">TNU:</span>
                  <span class="tag is-success">{{semester.tnu()}}</span>
                </div>
              </div>

              <div class="control">
                <div class="tags has-addons">
                  <span class="tag is-dark">GPA</span>
                  <span class="tag is-primary">{{semester.gpa('5unit')}}</span>
                </div>
              </div>

              <div class="control">
                <button class="button" @click="changeActiveSem(index)">Edit Courses</button>
              </div>

            </div>
          </div>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success" @click="addSem">New Semester</button>
          <button class="button" @click="showAddSem = false">Done</button>
        </footer>
      </div>
    </div>

    <!-- View CGPA -->
    <div class="modal" style="display: flex" v-if="showcgpa">
      <div class="modal-background"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">View CGPA</p>
          <button class="delete" aria-label="close" @click="showcgpa = false"></button>
        </header>
        <section class="modal-card-body">
          <p>Your CGPA iS</p>
          <h3>{{activeAccount.getcgpa()}}</h3>
        </section>
        <footer class="modal-card-foot">
          <button class="button" @click="showcgpa = false">Close</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import data, {Course, Semester} from '../data'
export default {
  name: 'Calculator',
  data () {
    return {
      accounts: data.accounts,
      activeAccount: data.activeAccount,
      activeSem: data.activeAccount.semesters[0],
      showAddSem: false,
      showcgpa: false
    }
  },

  methods: {
    addCourse () {
      this.activeSem.courses.push(new Course())
    },
    deleteCourse (index) {
      this.activeSem.courses.splice(index, 1)
    },
    deleteSem (index) {
      this.activeAccount.semesters.splice(index, 1)
    },
    displayAddSem () {
      this.showAddSem = true
    },
    addSem () {
      this.activeAccount.semesters.push(new Semester(null, []))
    },
    changeActiveSem (index) {
      this.activeSem = this.activeAccount.semesters[index]
      this.showAddSem = false
    },
    showgp () {
      this.showcgpa = true
    },

    showNoLocalStorageSupport () {
      alert('Your browser does not support this feature')
    },

    save () {
      if (localStorage) {
        localStorage.setItem('user-' + this.accounts.indexOf(this.activeAccount), JSON.stringify(this.activeAccount))
        console.log(JSON.parse(localStorage.getItem('user-' + this.accounts.indexOf(this.activeAccount))))
        alert('Result saved successfully, you can close your browser now')
      } else {
        this.showNoLocalStorageSupport()
      }
    }
  }
}
</script>

<style>
  table {
    width: 100%;
    table-layout: fixed;
  }

  table caption {
    font-size: 1.5em;
    margin: .5em 0 .75em;
  }

  table tr {
    padding: .35em;
  }

  table th,
  table td {
    padding: .625em;
  }

  table th {
    font-size: .85em;
    letter-spacing: .1em;
  }

  table td input.course-input{
    border: none;
    border-bottom: 1px solid #ccc;
    box-shadow: none;
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }
    
    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
    
    table tr {  
      border: 1px solid var(--secondary-color);
      border-radius: 3px;
      display: block;
      margin-bottom: .625em;
    }
    
    table td {
      border-bottom: 1px solid #ddd;
      font-size: .8em;
      text-align: right;
      display: flex;
      align-items: center;
    }

    table td input.course-input{
      border: none;
      border-bottom: 1px solid #ccc;
      box-shadow: none;
    }

    table td .field{
      margin-left: auto;
      max-width: 70%;
    }
    
    table td::before {
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }
    
    table td:last-child {
      border-bottom: 0;
    }
  }

  .semester-list-item{
    border: 1px solid #ccc;
    padding: 5px;
    border-radius: 5px;
    margin: 5px 0
  }

  .semester-list-item p.control{
    width: 90%
  }

  .semester-list-item input{
    border-width: 0;
    border-bottom-width: 1.5px;
    box-shadow: none
  }

  .semester-list-item .field{
    align-items: center
  }

  .semester-list-item button.delete{
    margin-left: 0.5rem
  }

  .modal .modal-card-body{
    overflow-y: scroll
  }
</style>
