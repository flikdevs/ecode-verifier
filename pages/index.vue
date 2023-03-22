<script setup lang="ts">
import codes from "@/assets/data/tr.json";
import { Element, CodeTypes } from "@/types/common";

const code = ref("");

const element = ref<Element | null>(null);

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
      <div>
        <div class="flex gap-x-2 mt-3 p-4 bg-white rounded-md shadow-md">
          <Input
            v-model="code"
            class="!text-lg text-gray-800"
            placeholder="E421, E308"
            @keyup.enter="handleSearch"
          />
          <Button
            class="!text-lg shadow"
            @click="handleSearch"
            :disabled="code.length === 0"
          >
            Tekshirish
          </Button>
        </div>
        <div class="mt-4">
          <div
            v-if="element"
            class="min-h-40 py-4 mx-auto rounded-lg bg-white shadow text-gray-800 font-semibold text-center pt-3 text-shadow-none"
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
          <NotFound v-if="element == undefined" />
        </div>
      </div>
    </div>
  </div>
</template>
