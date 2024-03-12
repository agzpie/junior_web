<template>
  <div class="flex flex-row gap-4 justify-center font-semibold text-lg border border-red-300 w-full h-10">
    <span 
      class="px-4 py-1"
      v-for="item in topBarItems"
    >
      {{ item.name }}
    </span>
  </div>
  <hr>
</template>

<script setup>
defineProps({
  topBarItems: {
    name: String,
    source: String
  }
})
</script>