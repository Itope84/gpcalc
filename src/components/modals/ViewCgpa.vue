<template>
  <div
    class="modal"
    style="display: flex"
  >
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">View CGPA</p>
        <button
          class="delete"
          aria-label="close"
          @click="$emit('close')"
        ></button>
      </header>
      <section class="modal-card-body has-text-centered">
        <p>Your CGPA iS</p>
        <h3 class="text-primary-colored">{{cgpa}}</h3>
      </section>
      <footer class="modal-card-foot">
        <button
          class="button"
          @click="$emit('close')"
        >Close</button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    cgpa: String
  }
}
</script>
