<template>
  <div class="page">
    <py-repl id="my-repl" auto-generate=true></py-repl>
  </div>
</template>

<script>
import '@/assets/pyscript/pyscript.js';
import '@/assets/pyscript/pyscript.css';

export default {
  name: 'Python',
  data () {
    return {
      src: '',
      showSessionId: ''
    }
  },
  mounted () {
    this.src = `static/python.html${this.showSessionId}`;
    this.showSessionId = window.location.search
  }, 
  head: {
  // creates a title tag in header.
  title () {
    return {
      inner: this.title
    }
  },
  meta: [
    // creates a meta description tag in header.
    { name: 'description', content: 'My description' }
  ]
}
}
</script>

<style scoped>
.page {
  width: 100%;
  height: 100%
}
</style>