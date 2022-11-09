<script setup lang="ts">
const { params } = useRoute();

const id = Array.isArray(params.id) ? params.id[0] : params.id;

const { data, pending } = useFetch(
  `/api/posts/postData?id=${encodeURIComponent(id)}`,
  {
    key: id,
  }
);
</script>

<template>
  <div v-if="pending"></div>
  <div v-else v-html="data?.contentHtml"></div>
</template>
