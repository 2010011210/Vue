<script>
// defineProps({
//   msg: {
//     type: String,
//     required: true
//   }
// })
export default 
{
  name :"helloWorld",
  data(){
    return{
      name:"学习",
      address:"shanghai",
      count: 0
    }
  },
  methods:{},
  props:['msg']
}
</script>

<template>
  <div class="greetings">
    <h1 class="green">这个是msg:{{ msg }}</h1>
    <h1 class="green">这个是:{{ name }}</h1>
    <h1 class="green">这个是:{{ address }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <button @click="count++">{{count}}</button>
    <input v-model="count" style="width:200px" />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
