<script setup lang="ts">
import { getFirebase } from "../getFirebase";
import { collection, query, limit } from "firebase/firestore";
import { useFirestore } from "@vueuse/firebase";

const { firestore } = getFirebase();
const allMovies = collection(firestore, "movies");
const topMovies = useFirestore(query(allMovies, limit(3)));
</script>

<template>
  <template v-for="movie in topMovies" :key="movie.imdbID">
    <h2>{{ movie.title }}</h2>
  </template>
</template>
