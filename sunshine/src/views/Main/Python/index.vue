<template>
  <div class="page">
    <iframe  :src="src" scrolling="auto" frameborder="0" class="page"></iframe>
  </div>
</template>

<script>

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