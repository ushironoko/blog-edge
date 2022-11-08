<script setup lang="ts">
const { params, name } = useRoute();

const { data } = useAsyncData(name?.toString() || '', async () => {
  if (!Array.isArray(params.id)) {
    const contentHtml = (await getPostData(params.id)).contentHtml;
    return contentHtml;
  }
  return '<div />';
});
</script>

<template>
  <div v-html="data"></div>
</template>
