<template>
  <FeaturePanel
    description="transformer 없이 runtypex runtime mapper만 실행해 핵심 기능을 검증합니다."
    index="08"
    title="Pure runtypex verification"
    wide
  >
    <table>
      <thead>
        <tr>
          <th>Check</th>
          <th>Expected</th>
          <th>Actual</th>
          <th>Result</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row.label">
          <td>{{ row.label }}</td>
          <td>{{ row.expected }}</td>
          <td>{{ row.actual }}</td>
          <td>
            <strong :class="row.passed ? 'verify-pass' : 'verify-fail'">
              {{ row.passed ? "PASS" : "FAIL" }}
            </strong>
          </td>
        </tr>
      </tbody>
    </table>
  </FeaturePanel>
</template>

<script lang="ts" setup>
import FeaturePanel from "./FeaturePanel.vue";
import type { VerificationRow } from "../runtypexDemo.types";

defineProps<{
  rows: VerificationRow[];
}>();
</script>
