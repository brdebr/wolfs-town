<template>
  <Combobox v-model="selected" nullable :disabled="props.disabled">
    <div class="relative mt-1 base-select">
      <div
        class="base-select__input"
      >
        <!-- Input -->
        <ComboboxButton as='div'>
          <ComboboxInput
            class="base-select__input-field"
            :displayValue="displayValueFn"
            @change="query = $event.target.value"
          />
        </ComboboxButton>
        <!-- Clear button -->
        <button
          class="absolute inset-y-0 right-10 flex items-center -mr-2 px-2"
          v-if="selected"
          @click="clear"
        >
          <XCircleIcon
            class="base-select__input-icon"
            aria-hidden="true"
          />
        </button>
        <!-- Open select button -->
        <ComboboxButton
          class="absolute inset-y-0 right-0 flex items-center pl-1 pr-2"
          v-slot="{ open }"
        >
          <transition v-bind="(fadeTransition as TransitionProps)">
            <ChevronDownIcon
              v-if="!open"
              class="base-select__input-icon"
              aria-hidden="true"
            />
            <ChevronUpIcon
              v-else
              class="base-select__input-icon"
              aria-hidden="true"
            />
          </transition>
        </ComboboxButton>
      </div>
      <!-- Input -->
      <TransitionRoot
        v-bind="slideYTransitionCamelCase"
        @after-leave="clearQuery"
      >
        <ComboboxOptions
          class="base-select__menu"
        >
        <!-- Noting found -->
          <div
            v-if="query !== '' && filteredItems.length === 0"
            class="relative cursor-default select-none py-2 px-4 text-gray-700"
          >
            Nothing found.
          </div>

          <ComboboxOption
            v-for="item in filteredItems"
            as="template"
            :key="item[keyProp]"
            :value="item"
            v-slot="{ selected, active }"
          >
            <li
              class="relative cursor-pointer select-none py-2 px-3 transition-colors duration-100"
              :class="{
                'base-select__menu-item--active': active,
                'base-select__menu-item': !active,
              }"
            >
              <span
                class="block truncate"
                :class="{ 'font-bold tracking-wide opacity-40': selected, 'font-normal': !selected }"
              >
                <slot name="item" :item="item">
                  {{ item[textKey] }}
                </slot>
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </div>
  </Combobox>
</template>

<script setup lang="ts">
import { TransitionProps } from 'vue'
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOptions,
  ComboboxOption,
  TransitionRoot,
} from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/20/solid'
import { XCircleIcon } from '@heroicons/vue/24/outline'
import { Role } from '~~/utils/types'

export type SelectItem = Record<string, string | number>

const props = defineProps<{
  items: SelectItem[],
  displayValueFn: (item: unknown) => string,
  valueKey: string,
  textKey: string,
  keyProp: string,
  modelValue: Role | null,
  query: string,
  disabled?: boolean,
  excludeSearchKeys?: string[],
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: Role | null): void;
  (event: 'update:query', value: string): void;
  (event: 'selected', value: Role | null): void;
}>();

const selected = useVModel(props, 'modelValue', emit);
watch(selected, (value) => {
  emit('selected', value)
})

const query = useVModel(props, 'query', emit);

const clear = () => {
  query.value = ''
  selected.value = null
}

const clearQuery = () => {
  query.value = ''
}

const filteredItems = computed(() => {
  if (query.value === '') {
    return props.items
  }

  return props.items.filter((item) => {
    // check if query is in any property of the item
    const itemWithoutExcludedKeys = props.excludeSearchKeys
      ? omitKeys(item, props.excludeSearchKeys)
      : item
    return Object.values(itemWithoutExcludedKeys).some((value) => {
      return String(value).toLowerCase().includes(query.value.toLowerCase())
    })
  })
})
</script>

