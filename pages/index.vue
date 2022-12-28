<script setup lang="ts">
import codes from "@/assets/data/tr.json";
import { Element, CodeTypes } from "@/types/common";

const code = ref("");

const element = ref<Element>();

const handleSearch = () => {
  if (code.value.trim().length > 0) {
    const item = codes.find((c) => c.code === code.value.toUpperCase());
    element.value = item as Element;
  } else {
  }
};

const elementType = (type: CodeTypes): string => {
  if (type === CodeTypes.halal) {
    return "text-green-500";
  } else if (type === CodeTypes.haram) {
    return "text-red-500";
  }
  return "text-yellow-500";
};

const icon = (type: CodeTypes): string => {
  if (type === CodeTypes.halal) {
    return "eco";
  } else if (type === CodeTypes.haram) {
    return "local_fire_department";
  }
  return "visibility_off";
};
</script>

<template>
  <div class="container mx-auto h-screen">
    <div class="flex flex-col items-center pt-10 text-white text-shadow-md">
      <h1 class="text-2xl sm:text-4xl font-semibold mb-2">
        E-Kod Tekshiruvchi
      </h1>
      <p
        class="mb-2 text-lg sm:text-xl font-medium w-60 md:w-[340px] text-center"
      >
        Mahsulotlardagi moddalar halolligini tekshirish
      </p>
      <div class="flex gap-x-1 mt-3 p-2 bg-white rounded-md shadow-md">
        <input
          v-model="code"
          type="text"
          class="border-2 border-gray-400 text-gray-500 text-lg font-semibold outline bg-gray-100 focus:(bg-white) p-2 outline-none rounded-md w-52"
          placeholder="E421, E308"
          @keyup.enter="handleSearch"
        />
        <button
          class="px-3 py-2 bg-white border-2 border-gray-400 rounded-md text-gray-700 text-base font-semibold transition duration-300 tracking-wide"
          @click="handleSearch"
        >
          Tekshirish
        </button>
      </div>
      <div
        v-if="element"
        class="mt-4 w-[340px] min-h-40 bg-white shadow-md rounded-md text-gray-800 font-semibold text-center pt-3 text-shadow-none"
      >
        <h1
          class="text-3xl font-semibold flex items-center justify-center gap-x-1"
          :class="elementType(element.type as CodeTypes)"
        >
          <i class="material-icons">{{ icon(element.type as CodeTypes) }}</i
          >{{ element.type }}
        </h1>
        <h3 class="text-xl my-2">{{ element.code }}</h3>
        <p>{{ element.description }}</p>
      </div>
    </div>
  </div>
</template>
