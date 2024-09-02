<script setup>
import { ref } from 'vue'
import gsap from 'gsap'

const logo = ref(null);
let tl = null;

onMounted(() => {
    tl = gsap.timeline();
    tl.from(logo.value, {
        y: -300,
        duration: 2,
        ease: "bounce",
    });
});

onUnmounted(() => {
  ctx.revert();
});
</script>

<template>
  <Transition appear 
    @before-enter="beforeEnter"
    @enter="enter"
  >
    <img src="assets/logo_3.png" ref="logo" class="logo max-w-[1200px]"/>
  </Transition>
</template>