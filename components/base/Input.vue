<template>
  <div class="base-input-component">
    <input
      v-model="value"
      class="base-input input-ring"
      :title="props.title"
      :placeholder="props.placeholder"
      :type="props.type"
    />
  </div>
</template>

<script setup lang="ts">
export type InputProps = {
  modelValue: string;
  title?: string;
  placeholder?: string;
  type?: string;
  color?: string;
};
const props = withDefaults(defineProps<InputProps>(), {
  placeholder: '',
  type: 'text',
  color: '#37D',
});
const emit = defineEmits<{
  (event: 'update:modelValue', modelValue: string): void;
}>();

const value = useVModel(props, 'modelValue', emit);
</script>
