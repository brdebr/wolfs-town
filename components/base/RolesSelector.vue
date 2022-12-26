<template>
  <Combobox v-model="selected" nullable>
    <div class="relative mt-1 group">
      <div
        class="relative w-full cursor-default overflow-hidden rounded bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm"
      >
        <ComboboxButton as='div'>
          <ComboboxInput
            class="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0 focus:outline-none"
            :displayValue="displayValueFn"
            @change="query = $event.target.value"
          />
        </ComboboxButton>
        <button
          class="absolute inset-y-0 right-10 flex items-center -mr-2 px-2"
          v-if="selected?.name"
          @click="clear"
        >
          <XCircleIcon
            class="h-5 w-5 text-gray-400 hover:text-gray-600"
            aria-hidden="true"
          />
        </button>
        <ComboboxButton
          class="absolute inset-y-0 right-0 flex items-center pl-1 pr-2"
        >
          <ChevronDownIcon
            class="h-5 w-5 text-gray-400 group-hover:text-gray-600"
            aria-hidden="true"
          />
        </ComboboxButton>
      </div>
      <TransitionRoot
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        @after-leave="query = ''"
      >
        <ComboboxOptions
          class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <div
            v-if="filteredPeople.length === 0 && query !== ''"
            class="relative cursor-default select-none py-2 px-4 text-gray-700"
          >
            Nothing found.
          </div>

          <ComboboxOption
            v-for="person in filteredPeople"
            as="template"
            :key="person.id"
            :value="person"
            v-slot="{ selected, active }"
          >
            <li
              class="relative cursor-default select-none py-2 pl-10 pr-4"
              :class="{
                'bg-teal-600 text-white': active,
                'text-gray-900': !active,
              }"
            >
              <span
                class="block truncate"
                :class="{ 'font-medium': selected, 'font-normal': !selected }"
              >
                {{ person.name }}
              </span>
              <span
                v-if="selected"
                class="absolute inset-y-0 left-0 flex items-center pl-3"
                :class="{ 'text-white': active, 'text-teal-600': !active }"
              >
                <CheckIcon class="h-5 w-5" aria-hidden="true" />
              </span>
            </li>
          </ComboboxOption>
        </ComboboxOptions>
      </TransitionRoot>
    </div>
  </Combobox>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
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

type Person = {
  id: number
  name: string
}

const displayValueFn = (person: unknown) => (person as Person)?.name

const people: Person[] = [
  { id: 1, name: 'Wade Cooper' },
  { id: 2, name: 'Arlene Mccoy' },
  { id: 3, name: 'Devon Webb' },
  { id: 4, name: 'Tom Cook' },
  { id: 5, name: 'Tanya Fox' },
  { id: 6, name: 'Hellen Schmidt' },
]

let selected = ref<Person>({id: 0, name: ''})
let query = ref('')

const clear = () => {
  query.value = ''
  selected.value = {id: 0, name: ''}
}

let filteredPeople = computed(() =>
  query.value === ''
    ? people
    : people.filter((person) =>
        person?.name
          .toLowerCase()
          .replace(/\s+/g, '')
          .includes(query.value.toLowerCase().replace(/\s+/g, ''))
      )
)
</script>
