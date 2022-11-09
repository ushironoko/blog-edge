<script setup lang="ts">
const { params, name } = useRoute();
const contents = ref('');

if (params.id !== 'url') {
  const { data } = useFetch(
    `/api/posts/postData?id=${encodeURIComponent(params.id as string)}`,
    {
      key: name?.toString(),
      initialCache: false,
    }
  );
  contents.value = data.value?.contentHtml || '';
}
</script>

<template>
  <div v-html="contents"></div>
</template>
