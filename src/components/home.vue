<template>
  <div class="hello">
    어서와 뷰월드에~!
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {
  width: 100%;
  height: 100%;
  & .hello {
      background-color: #f00;
    }
}
.container {
  display: flex;
}
</style>
