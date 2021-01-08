<template>
  <h1 class="text-indigo-700 text-xl">{{ title }}</h1>
  <hr>
  <ul >
    <li v-for="episode in episodes" :key="episode.id">
      {{episode.name}}
    </li>
  </ul>
   
</template>

<script>
import { request as fetchGQL } from "graphql-request";
import { inject, ref } from 'vue';

export default {
  setup() {
    let title = "Episodes";
    let episodes = ref([]);
    const pages = inject("info")  

    fetchGQL(
      "https://rickandmortyapi.com/graphql",
      `
     query {
        episodes {
          info {
            count
            pages
            next
            prev
          }
            results {
            id
            name
          }
       }
     }
    `
    ).then((data) => {
      episodes.value = data.episodes.results;
      pages.value = data.episodes.info;

    });

    return {
      title,
      episodes,
    };
  },
};
</script>

<style>
</style>