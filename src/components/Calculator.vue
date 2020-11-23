<template>
  <div>
    <div class="card">
      <header class="card-header">
        <h4 class="card-header-title">
          Computing for <span class="text-primary-colored">&nbsp;{{activeAccount.username ? activeAccount.username : "Default User"}}</span>
        </h4>
        <a
          href="#"
          class="card-header-icon"
          aria-label="more options"
        >
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
                  <option
                    v-for="(semester, index) in activeAccount.semesters"
                    :value="activeAccount.semesters[index]"
                    :key="`semester-${index}`"
                  >{{semester.semName ? semester.semName : "Semester "+(index+1)}}</option>
                </select>
              </div>
              <div class="icon is-small is-left">
                <span class="icon-border_color"></span>
              </div>
            </div>

            <a
              class="button"
              @click="displayAddSem"
              style="margin-left: .5rem"
            >
              <span class="icon-mode_edit"></span>
            </a>
          </div>

          <div class="column">
            <p class="buttons is-flex">

              <a class="button ml-auto bg-secondary">
                <span
                  class="icon-visibility"
                  @click="showgp"
                ></span>
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
            <tr
              v-for="(course, index) in activeSem.courses"
              :key="`course-${index}`"
            >

              <td
                scope="row"
                data-label="Course"
              >
                <div class="field">
                  <p class="control has-icons-right">
                    <input
                      class="input course-input"
                      type="text"
                      v-model="course.coursename"
                    >
                    <span class="icon is-small is-right">
                      <span class="icon-mode_edit"></span>
                    </span>
                  </p>
                </div>
              </td>
              <td data-label="Units">
                <div class="field">
                  <p class="control has-icons-right">
                    <input
                      class="input course-input"
                      type="number"
                      v-model="course.unit"
                    >
                    <span class="icon is-small is-right">
                      <span class="icon-mode_edit"></span>
                    </span>
                  </p>
                </div>
              </td>
              <td data-label="Score">
                <div class="field">
                  <p class="control has-icons-right">
                    <input
                      class="input course-input"
                      type="number"
                      v-model="course.score"
                    >
                    <span class="icon is-small is-right">
                      <span class="icon-mode_edit"></span>
                    </span>
                  </p>
                </div>
              </td>

            </tr>

          </tbody>

        </table>

        <p class="buttons is-fullwidth">
          <button
            class="button ml-auto mr-auto"
            @click="addCourse"
          >Add Course</button>

          <a
            class="button ml-auto mr-auto"
            @click="displayAddSem"
          >Change semester</a>

          <button
            class="button ml-auto mr-auto"
            @click="save"
          >Save Results</button>

        </p>

        <p class="is-flex">
          <button
            class="button ml-auto mr-auto bg-secondary"
            @click="showgp"
          >View CGPA</button>
        </p>

      </div>
    </div>

    <!-- Modals -->
    <!-- Add new semester -->
    <add-semester
      v-if="showAddSem"
      :active-account="activeAccount"
      @close="showAddSem = false"
      @update:activeSem="changeActiveSem"
    ></add-semester>

    <!-- View CGPA -->
    <view-cgpa
      v-if="showcgpa"
      :cgpa="activeAccount.getcgpa().toFixed(2)"
      @close="showcgpa = false"
    ></view-cgpa>
  </div>
</template>

<script>
import data, {Course} from '../data'
import AddSemester from './modals/AddSemester'
import ViewCgpa from './modals/ViewCgpa'

export default {
  name: 'Calculator',
  components: {
    AddSemester,
    ViewCgpa
  },
  data() {
    return {
      accounts: data.accounts,
      activeAccount: data.activeAccount,
      activeSem: data.activeAccount.semesters[0],
      showAddSem: false,
      showcgpa: false
    }
  },

  methods: {
    addCourse() {
      this.activeSem.courses.push(new Course())
    },
    deleteCourse(index) {
      this.activeSem.courses.splice(index, 1)
    },

    displayAddSem() {
      this.showAddSem = true
    },

    changeActiveSem(index) {
      this.activeSem = this.activeAccount.semesters[index]
      this.showAddSem = false
    },
    showgp() {
      this.showcgpa = true
    },

    showNoLocalStorageSupport() {
      alert('Your browser does not support this feature')
    },

    save() {
      if (localStorage) {
        localStorage.setItem(
          'user-' + this.accounts.indexOf(this.activeAccount),
          JSON.stringify(this.activeAccount)
        )
        console.log(
          JSON.parse(
            localStorage.getItem(
              'user-' + this.accounts.indexOf(this.activeAccount)
            )
          )
        )
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
  margin: 0.5em 0 0.75em;
}

table tr {
  padding: 0.35em;
}

table th,
table td {
  padding: 0.625em;
}

table th {
  font-size: 0.85em;
  letter-spacing: 0.1em;
}

table td input.course-input {
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
    margin-bottom: 0.625em;
  }

  table td {
    border-bottom: 1px solid #ddd;
    font-size: 0.8em;
    text-align: right;
    display: flex;
    align-items: center;
  }

  table td input.course-input {
    border: none;
    border-bottom: 1px solid #ccc;
    box-shadow: none;
  }

  table td .field {
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

.semester-list-item {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 5px;
  margin: 5px 0;
}

.semester-list-item p.control {
  width: 90%;
}

.semester-list-item input {
  border-width: 0;
  border-bottom-width: 1.5px;
  box-shadow: none;
}

.semester-list-item .field {
  align-items: center;
}

.semester-list-item button.delete {
  margin-left: 0.5rem;
}

.modal .modal-card-body {
  overflow-y: scroll;
}
</style>
