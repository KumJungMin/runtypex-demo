<template>
  <FeaturePanel
    description="DTO path를 Domain field로 직접 연결합니다."
    index="01"
    title="defineMap + source"
  >
    <pre>{{ code }}</pre>
  </FeaturePanel>
</template>

<script lang="ts" setup>
import FeaturePanel from "./FeaturePanel.vue";

defineProps<{
  code: string;
}>();
</script>
