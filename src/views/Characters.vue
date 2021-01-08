<template>
  <h2>Characters</h2>
  <button @click="inc">increment</button>
  {{ number }}
</template>

<script >


import { ref } from 'vue';
export default {
  setup() {

    let number = ref(0)
    const inc = () => number.value++;

    return {
      number,
      inc,
    };
  },

// data(){
//   return{
//     number: 1,
//   }
// },

// methods: {
//   inc(){
//     this.number++
//   }

};
</script>
