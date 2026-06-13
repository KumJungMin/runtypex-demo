<template>
  <FeaturePanel
    description="값 변환과 DTO 전체 접근을 같은 spec에서 처리합니다."
    index="03"
    title="transform + mapperHelpers"
  >
    <table>
      <thead>
        <tr>
          <th>Domain field</th>
          <th>DTO path</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.field">
          <td>{{ row.field }}</td>
          <td>{{ row.path }}</td>
          <td>{{ row.result }}</td>
        </tr>
      </tbody>
    </table>
  </FeaturePanel>
</template>

<script lang="ts" setup>
import FeaturePanel from "./FeaturePanel.vue";
import type { TransformRow } from "../runtypexDemo.types";

defineProps<{
  rows: TransformRow[];
}>();
</script>
