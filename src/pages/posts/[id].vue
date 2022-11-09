<script setup lang="ts">
const { params, name } = useRoute();

const { data, pending } = useFetch(
  `/api/posts/postData?id=${encodeURIComponent(params.id as string)}`,
  {
    key: name?.toString(),
    initialCache: false,
  }
);
</script>

<template>
  <div v-if="pending"></div>
  <div v-else v-html="data?.contentHtml"></div>
</template>
