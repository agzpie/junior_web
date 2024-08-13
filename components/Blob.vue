<template>
  <div class="panel center column overflow-x-clip" ref="main">
    <div class="box box-a gradient-green">
      <img src="assets/slice1.svg" class="w-96" />
    </div>
    <div class="box box-b gradient-green right-20">
      <img src="assets/slice2.svg" class="w-96" />
    </div>
  </div>
  <section class="panel center gradient-orange column text-[#ca3811] text-semibold text-lg">
  </section>
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
    const boxA = self.selector('.box-a');
    const boxB = self.selector('.box-b');

      gsap.to(boxA, {
        x: 350,
        rotation: 15,
        duration: 1,
        opacity: 0.5,
        markers: true,
        scrollTrigger: {
          trigger: boxA,
          start: 'bottom bottom',
          end: 'top',
          scrub: 2,
          toggleClass: 'active'
        },
      });

      gsap.to(boxB, {
        x: -300,
        rotation: 35,
        duration: 1,
        opacity: 0.2,
        markers: true,
        scrollTrigger: {
          trigger: boxB,
          start: 'bottom bottom',
          end: 'top',
          scrub: 1,
          toggleClass: 'active'
        },
      });

    //const boxes = self.selector('.box');
    // boxes.forEach((box) => {
    //   gsap.to(box, {
    //     x: 350,
    //     rotation: 15,
    //     duration: 1,
    //     markers: true,
    //     scrollTrigger: {
    //       trigger: box,
    //       start: 'bottom bottom',
    //       end: 'top',
    //       scrub: 2,
    //       toggleClass: 'active'
    //     },
    //   });
    // });

  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<style>
.box {
  border-radius: 12px;
  display: flex;
  /* align-items: start; */
  /* justify-content: start; */
  text-align: center;
  background-color: green;
  font-weight: 600;
  color: var(--dark);
  line-height: 1.2;
  will-change: transform;
  margin-bottom: 20px;
  transition-property: all;
  transition-duration: 300ms;
  z-index: 10;
}

/* .box.active {
  filter: opacity(30%) blur(15px) hue-rotate(4deg) brightness(118%) contrast(119%);
  /* filter: opacity(30%) blur(15px) invert(48%) sepia(39%) saturate(1476%) hue-rotate(120deg) brightness(118%) contrast(119%); */
  /* z-index: 10; */
/* } */ 

/* .box-a {
  top: 200px;
  align-items: end;
} */

.box-b {
  /* top: 600px; */
 justify-content: end;
}

.box-c {
  top: 1000px;
}

/* button:not('.box') { breaking for some reason in codepen? */
  button {
  display: inline-block;
  outline: none;
  padding: 8px 14px;
  background: var(--dark);
  border: solid 2px var(--light);
  color: var(--light);
  text-decoration: none;
  border-radius: 99px;
  padding: 12px 25px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  line-height: 18px;
}

.gradient-green {
  background: var(--gradient-macha),
    url('https://assets.codepen.io/16327/noise-e82662fe.png'); /* Replace with the path to your noise texture image */
  background-blend-mode: color-dodge; /* Blend the noise texture with the gradient */
}

.gradient-orange {
  background: var(--gradient-orange-crush),
    url('https://assets.codepen.io/16327/noise-e82662fe.png'); /* Replace with the path to your noise texture image */
  background-blend-mode: color-dodge; /* Blend the noise texture with the gradient */
}

.gradient-purple {
  background: var(--gradient-purple-haze),
    url('https://assets.codepen.io/16327/noise-e82662fe.png'); /* Replace with the path to your noise texture image */
  background-blend-mode: color-dodge; /* Blend the noise texture with the gradient */
}
</style>