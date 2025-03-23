<template>
  <div class="fixed z-10 top-4 flex flex-row gap-4 justify-center font-regular text-lg text-slate-50 bg-slate-600 w-80 rounded-full h-10">
    <span 
      class="px-4 py-1 hover:bg-slate-500 rounded-full"
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