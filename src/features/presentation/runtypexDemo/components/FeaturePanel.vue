<template>
  <article :class="['feature-panel', { 'wide-panel': wide }]">
    <div class="panel-heading">
      <span class="panel-index">{{ index }}</span>
      <div>
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
      </div>
    </div>
    <slot />
  </article>
</template>

<script lang="ts" setup>
defineProps<{
  description: string;
  index: string;
  title: string;
  wide?: boolean;
}>();
</script>
