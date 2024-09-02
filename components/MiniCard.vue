<template>
  <div class="flex flex-col justify-between items-center">
    <img :src="imageSrc" class="max-w-72" :class="classContent"/>
    <p class="text-yellow-300 text-[28px]">{{ title }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  imageSrc: String,
  classContent: Array
})
</script>