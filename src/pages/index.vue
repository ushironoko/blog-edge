<script setup lang="ts">
const { data: posts } = useAsyncData('key', async () => {
  const posts = getSortedPostsData();
  return { ...posts };
});
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
