<template>
    <div id="hero" class="absolute">

        <div id="test" class='layer-0 layer -top-4 parallax brightness-50 saturate-200 translate-x-[30%] scale-x-150 ' data-depth='0.40'>
            <img src="assets/Vector 2.png"  />
        </div>
        <div class='layer-1 layer parallax brightness-75 left-8 translate-x-4 -top-10' data-depth='0.50'>
            <img src="assets/Vector 2.png" />
        </div>
        <div  class="layer-2 layer parallax -left-4 -top-12" data-depth='0.6'>
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
		trigger: "#test",
		start: "top top",
		end:  "=+1000",
        markers: true,
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
	width: 100%;
	position: fixed;
	z-index: 1;
    height: 100%;
}
/* .layer {
	min-height: 100vw;
} */

.layer-1 {
	/* background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/272781/ilu_03.png'); */
	/* /* background-position: left bottom; */
    min-height: 100%;
}

.layer-2 {
    min-height: 100%;
}
</style>