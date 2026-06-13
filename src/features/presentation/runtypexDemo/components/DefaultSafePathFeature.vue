<template>
  <FeaturePanel
    description="누락된 DTO path는 default로 보정됩니다."
    index="04"
    title="default + safe path accessor"
  >
    <div class="status-list">
      <div class="status-row">
        <span>META.MEMO</span>
        <strong>{{ domain.memo }}</strong>
      </div>
      <div class="status-row">
        <span>TAGS.0.ID</span>
        <strong>{{ domain.firstTagId }}</strong>
      </div>
    </div>
  </FeaturePanel>
</template>

<script lang="ts" setup>
import FeaturePanel from "./FeaturePanel.vue";
import type { SearchAddressDomain } from "../runtypexDemo.types";

defineProps<{
  domain: SearchAddressDomain;
}>();
</script>
