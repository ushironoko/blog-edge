<script setup lang="ts">
import { Post } from '../types/posts';
import { format } from 'date-fns';

defineProps<{
  postData: Post;
  ogImageUrl: string;
}>();
</script>

<template>
  <div class="w-[280px] h-auto min-h-[288px]">
    <NuxtLink :href="`/posts/${postData.id}`">
      <div class="flex flex-col">
        <div class="mb-1">
          <div>
            <img class="object-cover" :src="ogImageUrl" />
          </div>
          <div class="mt-2">
            <h2>
              <p>{{ postData.title }}</p>
            </h2>
          </div>
        </div>
        <div>
          <p class="text-12">
            {{ format(new Date(postData.publishedAt), 'yyyy/MM/dd') }}
          </p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>
