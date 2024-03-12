<template>
    <div id="smooth-wrapper" ref="{main}">
    <div id="smooth-content">
      <header class="header">
        <h1 class="title">GreenSock ScrollSmoother on a Nuxt3 App</h1>
        <button class="button" @click="scrollTo">Jump to C</button>
      </header>
      <div class="box box-a gradient-purple" data-speed="0.5">a</div>
      <div class="box box-b gradient-green" data-speed="0.8">b</div>
      <div class="box box-c gradient-orange" data-speed="1.5">c</div>
      <div class="line"></div>
    </div>
  </div>
</template>


<script>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { ScrollSmoother } from 'gsap/ScrollSmoother';

if (typeof window !== 'undefined') {
  gsap.config({
    trialWarn: false,
  });
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default {
  setup() {
    const main = ref();
    let ctx;
    let smoother;

    const scrollTo = () => {
      smoother.scrollTo('.box-c', true, 'center center');
    };

    onMounted(() => {
      ctx = gsap.context(() => {
        // create the smooth scroller FIRST!
        // smoother = ScrollSmoother.create({
        //   smooth: 2, // seconds it takes to "catch up" to native scroll position
        //   effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
        // });
        ScrollTrigger.create({
          trigger: '.box-c',
          pin: true,
          start: 'center center',
          end: '+=300',
          markers: true,
        });
      }, main.value);
    });
    onUnmounted(() => {
      ctx.revert();
    });

    return { main, scrollTo };
  },
};
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
  background-color: var(--green);
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