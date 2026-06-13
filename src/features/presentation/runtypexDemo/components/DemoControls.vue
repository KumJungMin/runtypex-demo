<template>
  <section class="control-strip" aria-label="Demo controls">
    <label class="switch-row">
      <input
        :checked="isActiveDto"
        type="checkbox"
        @change="emitChecked('update:isActiveDto', $event)"
      />
      <span>ACTIVE status</span>
    </label>
    <label class="switch-row">
      <input
        :checked="includeOptionalMemo"
        type="checkbox"
        @change="emitChecked('update:includeOptionalMemo', $event)"
      />
      <span>optional memo</span>
    </label>
    <label class="switch-row">
      <input
        :checked="includeTags"
        type="checkbox"
        @change="emitChecked('update:includeTags', $event)"
      />
      <span>tag path</span>
    </label>
  </section>
</template>

<script lang="ts" setup>
defineProps<{
  includeOptionalMemo: boolean;
  includeTags: boolean;
  isActiveDto: boolean;
}>();

const emit = defineEmits<{
  "update:includeOptionalMemo": [value: boolean];
  "update:includeTags": [value: boolean];
  "update:isActiveDto": [value: boolean];
}>();

type UpdateEvent =
  | "update:includeOptionalMemo"
  | "update:includeTags"
  | "update:isActiveDto";

function emitChecked(eventName: UpdateEvent, event: Event) {
  emit(eventName, (event.target as HTMLInputElement).checked);
}
</script>
