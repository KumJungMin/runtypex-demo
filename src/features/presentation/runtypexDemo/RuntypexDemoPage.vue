<template>
  <main class="demo-shell">
    <DemoHero />

    <DemoControls
      v-model:is-active-dto="isActiveDto"
      v-model:include-optional-memo="includeOptionalMemo"
      v-model:include-tags="includeTags"
    />

    <section class="panel-grid">
      <BasicMapperFeature :code="basicMapperCode" />
      <RuntimeResultFeature :dto="currentDto" :domain="mappedAddress" />
      <TransformHelpersFeature :rows="transformRows" />
      <DefaultSafePathFeature :domain="mappedAddress" />
      <MappingPolicyFeature :message="policyViolationMessage" />
      <MapperMetadataFeature :rows="metadataRows" />
      <JsdocFeature :code="generatedJSDocExample" />
      <PureRuntimeVerificationFeature :rows="verificationRows" />
      <RealUsageFeature :result="realUsageResult" />
    </section>
  </main>
</template>

<script lang="ts" setup>
import "./runtypexDemo.css";
import BasicMapperFeature from "./components/BasicMapperFeature.vue";
import DefaultSafePathFeature from "./components/DefaultSafePathFeature.vue";
import DemoControls from "./components/DemoControls.vue";
import DemoHero from "./components/DemoHero.vue";
import JsdocFeature from "./components/JsdocFeature.vue";
import MapperMetadataFeature from "./components/MapperMetadataFeature.vue";
import MappingPolicyFeature from "./components/MappingPolicyFeature.vue";
import PureRuntimeVerificationFeature from "./components/PureRuntimeVerificationFeature.vue";
import RealUsageFeature from "./components/RealUsageFeature.vue";
import RuntimeResultFeature from "./components/RuntimeResultFeature.vue";
import TransformHelpersFeature from "./components/TransformHelpersFeature.vue";
import { useRuntypexDemo } from "./useRuntypexDemo";

const {
  basicMapperCode,
  currentDto,
  generatedJSDocExample,
  includeOptionalMemo,
  includeTags,
  isActiveDto,
  mappedAddress,
  metadataRows,
  policyViolationMessage,
  realUsageResult,
  transformRows,
  verificationRows,
} = useRuntypexDemo();
</script>
