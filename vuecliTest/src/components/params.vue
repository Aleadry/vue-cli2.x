<template>
  <div>
    <h2>{{ msg }}</h2>
    <p>newsId:{{ $route.params.newsId }}</p>
    <p>newsTitle:{{ $route.params.newsTitle }}</p>
  </div>
</template>

<script>
  export default {
    name: "params",
    data(){
      return{
        msg:'I am params page!'
      }
    }
  }
</script>

<style scoped>

</style>
