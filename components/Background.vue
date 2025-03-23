<template>
    <div id="hero" class="absolute w-xl">

        <div class='layer-0 layer -top-8 parallax translate-x-[100px] h-full' data-depth='0.4'>
            <img src="assets/Vector 2.png"  />
        </div>
        <div class='layer-1 layer parallax brightness-150 left-8 translate-x-4  scale-y-150' data-depth='0.5'>
            <img src="assets/Vector 2.png" />
        </div>
        <div  class="layer-2 layer parallax -left-4 -top-15 scale-y-125 brightness-75 saturate-150" data-depth='0.6'>
            <img src="assets/Vector 2.png" />
        </div>
    </div>
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
        const tl = gsap.timeline({
	scrollTrigger: {
		start: "top top",
		end:  document.body.scrollHeight,
    //markers: true,
		scrub: true
	},
    x: 800
});

gsap.utils.toArray(".parallax").forEach(layer => {
	const depth = layer.dataset.depth;
	const movement = -(layer.offsetHeight * depth)
	tl.to(layer, {y: movement, ease: "none"}, 0)
});
    }, main.value); // <- Scope!

});

onUnmounted(() => {
  ctx.revert(); // <- Easy Cleanup!
});

</script>

<style>
#hero {
	overflow: hidden;
	position: absolute;
	margin: 0 auto;
}

.layer {
	background-position: bottom center;
	background-size: auto;
	background-repeat: no-repeat;
	position: fixed;
	z-index: -1;
  height: 100%;
}
</style>