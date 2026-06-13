<template>
  <FeaturePanel
    description="DTO path, DB column, 설명을 mapping spec에 함께 둡니다."
    index="06"
    title="mapper metadata"
  >
    <table>
      <thead>
        <tr>
          <th>Field</th>
          <th>DTO</th>
          <th>DB</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.field">
          <td>{{ row.field }}</td>
          <td>{{ row.dto }}</td>
          <td>{{ row.db }}</td>
        </tr>
      </tbody>
    </table>
  </FeaturePanel>
</template>

<script lang="ts" setup>
import FeaturePanel from "./FeaturePanel.vue";
import type { MetadataRow } from "../runtypexDemo.types";

defineProps<{
  rows: MetadataRow[];
}>();
</script>
