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
    },
    beforeRouteEnter:(to,from,next)=>{
      console.log("准备进入params路由模板");
      next();
    },
    beforeRouteLeave:(to,from,next)=>{
      console.log("准备离开params路由模板");
      next();
    }
  }
</script>

<style scoped>

</style>
