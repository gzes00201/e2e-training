<template>
  <div class="alert alert-primary alert-dismissible fade show" role="alert">
  With Bootstrap!
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>


<!-- */<template>
Vuex測試範例
  <div id="app">
    <h1>{{ count }}</h1>
    <button @click="addCount">+</button>
  </div>
</template>

 <script>
// export default {
//   name: 'app',
//   computed:{
//     count(){
//         return `現在有 ${this.$store.state.count}`;
//     },
//   },
//   methods:{
//     addCount(){

//         this.$store.dispatch('doAddCount',{
//             name: 'aaaaaaa'
//         });
//     },
//   },
// };
// </script>
