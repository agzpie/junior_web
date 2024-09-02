<template>
  <p class="flex font-semibold px-4 text-lg justify-end border-b border-red-300">TITLE</p>
  
  <div class="flex flex-row w-full justify-between" ref="main">
    <img src="@/assets/img1.jpg" class="img-a w-96"/>
    <img src="@/assets/img3.jpg" class="img-b w-96 right-0"/>
  </div>
  <hr class="mb-20 border-red-300"/>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const main = ref();
let ctx;

onMounted(() => {
  ctx = gsap.context((self) => {
    const imgA = self.selector('.img-a');
    const imgB = self.selector('.img-b');

      gsap.to(imgA, {
        xPercent: 230,
        duration: 1,
        scrollTrigger: {
          trigger: imgA,
          start: 'bottom bottom',
          end: 'top',
          scrub: 1
        },
      });

      gsap.to(imgB, {
        xPercent: -230,
        duration: 1,
        opacity: 0.2,
        markers: true,
        scrollTrigger: {
          trigger: imgB,
          start: 'bottom bottom',
          end: 'top',
          scrub: 1
        },
      });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>