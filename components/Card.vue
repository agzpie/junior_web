<template>
  <p class="text-2xl flex justify-center mt-40 pt-40 mb-4 border-b border-red-100">{{ title }}</p>
  <div class="flex-row flex mb-40 justify-center">
    <div class="py-6">
      <p class="font-semibold text-lg border-b border-red-300">{{ items[0].subtitle }}</p>
      <slot />
    </div>
    <div 
      v-if="doublePanel"
      class="flex flex-col justify-end py-6"
    >
      <p class="flex font-semibold px-4 text-lg justify-end border-b border-red-300">{{ items[1].subtitle }}</p>
      <img src="@/assets/mapka.png" class="top-4 right-16 w-96"/>
      <!-- <NuxtImg :src="require(`@/assets/${items[1].img})`" class="top-4 right-16 w-96"/> -->
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  doublePanel: String,
  items: Array
})
</script>
