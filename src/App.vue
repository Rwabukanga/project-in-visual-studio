<template>
  <div id="app">
    <!-- <h1>hello World</h1> -->
    <router-view></router-view>
  </div>
</template>


<script>
export default {
 
 computed:{
   auth() {
     return this.$store.getters.isAuthenticated
   }
 }

}
</script>

<style scoped>

</style>
