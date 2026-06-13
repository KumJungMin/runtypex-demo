<template>
  <FeaturePanel
    description="transformer 없이도 runtime fallback mapper가 실행됩니다."
    index="02"
    title="makeMapper runtime result"
  >
    <div class="result-pair">
      <div>
        <h3>DTO</h3>
        <pre>{{ formatJson(dto) }}</pre>
      </div>
      <div>
        <h3>Domain</h3>
        <pre>{{ formatJson(domain) }}</pre>
      </div>
    </div>
  </FeaturePanel>
</template>

<script lang="ts" setup>
import FeaturePanel from "./FeaturePanel.vue";
import type {
  SearchAddressDomain,
  SearchAddressDto,
} from "../runtypexDemo.types";

defineProps<{
  domain: SearchAddressDomain;
  dto: SearchAddressDto;
}>();

function formatJson(value: unknown) {
  return JSON.stringify(value, null, 2);
}
</script>
