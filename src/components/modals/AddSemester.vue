<template>
  <div
    class="modal"
    style="display: flex"
  >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Add New Semesters</p>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('close')"
        ></button>
      </header>
      <section class="modal-card-body">
        <p>All Semesters</p>

        <div
          class="semester-list-item"
          v-for="(semester, index) in activeAccount.semesters"
          :key="`allsemester-${index}`"
        >
          <div class="field is-flex is-vcentered is-fullwidth">
            <p class="control has-icons-left has-icons-right">
              <input
                class="input course-input"
                type="text"
                v-model="semester.semName"
                :placeholder="'Semester '+(index+1)"
              >
              <span class="icon is-small is-left">
                <span class="icon-mode_edit"></span>
              </span>
            </p>

            <button
              class="delete"
              aria-label="close"
              style="margin-left: .5rem"
              @click="deleteSem(index)"
            ></button>
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
                <span class="tag is-success">{{semester.totalUnits()}}</span>
              </div>
            </div>

            <div class="control">
              <div class="tags has-addons">
                <span class="tag is-dark">GPA</span>
                <span class="tag is-primary">{{semester.gpa('5unit').toFixed(2)}}</span>
              </div>
            </div>

            <div class="control">
              <button
                class="button"
                @click="$emit('update:activeSem', index)"
              >Edit Courses</button>
            </div>

          </div>
        </div>
      </section>
      <footer class="modal-card-foot">
        <button
          class="button is-success"
          @click="addSem"
        >New Semester</button>
        <button
          class="button"
          @click="$emit('close')"
        >Done</button>
      </footer>
    </div>
  </div>
</template>
<script>
import {Semester} from '../../data'

export default {
  props: {
    activeAccount: {
      type: Object
    }
  },
  methods: {
    deleteSem(index) {
      this.activeAccount.semesters.splice(index, 1)
    },
    addSem() {
      this.activeAccount.semesters.push(new Semester(null, []))
    }
  }
}
</script>
