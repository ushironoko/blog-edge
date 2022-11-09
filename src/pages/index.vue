<script setup lang="ts">
const { data: posts } = useFetch('/api/posts/sortedpostsData');
</script>

<template>
  <main>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <NuxtLink :href="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </main>
</template>
