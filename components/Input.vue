<script lang="ts" setup>
const attrs = useAttrs();
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    :value="modelValue"
    type="text"
    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
    v-bind="attrs"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style scoped></style>
