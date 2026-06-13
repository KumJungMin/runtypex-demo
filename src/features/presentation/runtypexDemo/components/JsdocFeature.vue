<template>
  <FeaturePanel
    description="metadata는 Domain interface 문서 생성에 사용됩니다."
    index="07"
    title="JSDoc generator output"
    wide
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
