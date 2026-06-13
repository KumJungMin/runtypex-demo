<template>
  <FeaturePanel
    description="API 응답 DTO 배열을 Domain 모델로 변환한 뒤 실제 화면 상태로 사용합니다."
    index="09"
    title="Real usage example"
    wide
  >
    <div class="usage-summary">
      <div class="status-row">
        <span>keyword</span>
        <strong>{{ result.keyword }}</strong>
      </div>
      <div class="status-row">
        <span>searchable count</span>
        <strong>{{ result.totalCount }}</strong>
      </div>
      <div class="status-row">
        <span>selected id</span>
        <strong>{{ result.selectedAddress?.id ?? "-" }}</strong>
      </div>
    </div>

    <div class="address-list">
      <article v-for="address in result.addresses" :key="address.id" class="address-card">
        <div>
          <strong>{{ address.title }}</strong>
          <p>{{ address.detail }}</p>
        </div>
        <dl>
          <div>
            <dt>zip</dt>
            <dd>{{ address.zipCode }}</dd>
          </div>
          <div>
            <dt>badge</dt>
            <dd>{{ address.badge }}</dd>
          </div>
          <div>
            <dt>memo</dt>
            <dd>{{ address.memo }}</dd>
          </div>
        </dl>
      </article>
    </div>
  </FeaturePanel>
</template>

<script lang="ts" setup>
import FeaturePanel from "./FeaturePanel.vue";
import type { AddressSearchViewResult } from "../runtypexDemo.types";

defineProps<{
  result: AddressSearchViewResult;
}>();
</script>
