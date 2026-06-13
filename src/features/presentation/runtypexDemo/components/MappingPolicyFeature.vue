<template>
  <FeaturePanel
    description="같은 DTO path가 일관된 Domain 이름으로만 쓰이도록 검사합니다."
    index="05"
    title="defineMappingPolicy"
  >
    <div class="policy-result pass">
      <span>policyMode: error</span>
      <strong>canonical map passed</strong>
    </div>
    <pre class="error-output">{{ message }}</pre>
  </FeaturePanel>
</template>

<script lang="ts" setup>
import FeaturePanel from "./FeaturePanel.vue";

defineProps<{
  message: string;
}>();
</script>
