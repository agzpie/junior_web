<template>
  <section class="panel center column gradient-blue text-dark">
    <h1>Basic ScrollTrigger in Nuxt 3</h1>
    <h2>Scroll down to see the magic happen!!</h2>
  </section>
  <div class="panel center column" ref="main">
    <div class="box gradient-green">box</div>
    <div class="box gradient-green">box</div>
    <div class="box gradient-green">box</div>
  </div>
  <section class="panel center gradient-orange column text-dark">
    <h1>The End!</h1>
    <h2 class="center">
      For more information visit:&nbsp;
      <a
        href="https://greensock.com/scrolltrigger/"
        target="_blank"
        rel="noreferrer"
      >
        greensock.com/scrolltrigger/
      </a>
    </h2>
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
    const boxes = self.selector('.box');
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true,
        },
      });
    });
  }, main.value); // <- Scope!
});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});
</script>

<style>
.box {
  width: 75px;
  height: 75px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: green;
  font-weight: 600;
  color: var(--dark);
  line-height: 1.2;
  will-change: transform;
  margin-bottom: 20px;
}

.box-a {
  top: 200px;
}

.box-b {
  top: 600px;
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