<template>
  <Combobox v-model="selection">
    <ComboboxInput @change="search = $event.target.value" />
    <ComboboxOptions>
      <ComboboxOption
        v-for="option in options"
        :key="option"
        :value="option"
      >
        {{ option }}
      </ComboboxOption>
    </ComboboxOptions>
  </Combobox>
</template>

<script setup lang="ts">
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
} from '@headlessui/vue'

export type BaseAutoCompleteProps = {
  selection: string;
  options: string[];
  search?: string;
  placeholder?: string;
};
const props = withDefaults(defineProps<BaseAutoCompleteProps>(), {
  placeholder: 'Search...',
  search: '',
});

const emit = defineEmits<{
  (e: 'update:selection', value: string): void;
  (e: 'update:search', value: string): void;
}>();

const selection = useVModel(props, 'selection', emit)
const search = useVModel(props, 'search', emit)


</script>

<style lang="scss">


</style>