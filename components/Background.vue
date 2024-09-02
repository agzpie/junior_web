<!-- <script setup>

import { ref, onMounted, onUnmounted } from 'vue';

let interval;

const width = 100;
const height = 100;

const rate = 15;

const number = 50;
const waves = [
    { position : 60, amplitude : 2, delay : 6000, duration : 32000, color : '#33E5E1' },
    { position : 68, amplitude : 4, delay : 4000, duration : 22000, color : '#007991' },
    { position : 76, amplitude : 6, delay : 2000, duration : 12000, color : '#222E50' },
];
const paths = ref( [] );

function render()
{
    const time = new Date().getTime();

    for( let i = 0; i < waves.length; i++ )
    {
        let points = [];

        for( let j = 0; j <= number; j++ )
        {
            const delta = 2 * ( time + waves[ i ].delay + j * ( waves[ i ].duration / number ) % waves[ i ].duration ) / waves[ i ].duration;
            const offsetX = width / number;
            const offsetY = Math.cos( Math.PI * delta );

            const x = offsetX * j;
            const y = offsetY * waves[ i ].amplitude + waves[ i ].position;

            points.push( { x : x, y : y } );
        }

        const curve = points.map( point => `${point.x} ${point.y}`).join( ' ' );

        paths.value[ i ] = `M ${curve} 100 100 0 100 Z`;

    }
}

onMounted( () => interval = setInterval( () => render() , rate ) );

onUnmounted( () => clearInterval( interval ) );

</script>

<template>

	<svg preserveAspectRatio="none" v-bind:viewBox="`0 0 ${width} ${height}`">

        <path fill="#F5F5F5" d="M 0 0 100 0 100 100 0 100 Z" />

        <linearGradient v-for=" ( wave, key ) in waves " v-bind:id="`wave-gradient-${key}`" v-bind:key="`wave-gradient-${key}`" x1="0" x2="0" y1="0" y2="1">

            <stop offset="0%" v-bind:stop-color="wave.color" />

            <stop offset="100%" v-bind:stop-color="waves[ key + 1 ] ? waves[ key + 1 ].color : '#12192b' " />

        </linearGradient>

        <path v-for=" ( path, key ) in paths " v-bind:key="`path-${key}`" v-bind:fill="`url(#wave-gradient-${key})`" v-bind:d="path"/>

	</svg>

</template> -->




<template>

  <svg class="bg-vector absolute z-0" width="1440" height="3684" viewBox="0 0 1440 3684" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M318 95.0001C443.6 33.8001 732 47 786.5 50.5C841 54 848.5 10 781.5 14.5C714.5 19 558 25.5 362 0C195.5 0 -2.28882e-05 0.00012064 -2.28882e-05 0.00012064V435.869C8.20301 410.217 15.8146 390.162 20.7733 377.097L21 376.5C53.289 291.421 161 171.5 318 95.0001Z" fill="#A5C5E9"/>
    <path d="M123.5 1647C223.5 1544.67 386 1362.4 146 1128C74.8685 1058.53 28.6701 984.419 -2.28882e-05 910.669V3683.5L1440 3684.5V3323.5C1433 3332.5 1434.5 3334.5 1376 3394.5C1301.76 3470.65 1085 3605.5 899.5 3570C749.235 3541.24 704.488 3538.8 525.5 3570C307.5 3608 134 3445 89 3277.5C44 3110 138.5 2918.5 292 2807C445.5 2695.5 513 2594 464 2475.5C424.8 2380.7 245.85 2279.18 146 2199.5C-3.05176e-05 2083 -12.3306 1786 123.5 1647Z" fill="#A5C5E9"/>
  </svg>

</template>


<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';




// const main = ref();
// let ctx;

// onMounted(() => {
//     tl = gsap.timeline();
//     tl.from(logo.value, {
//         x: -300,
//         backgroundColor: "#f0c690",
//         borderRadius: "20%",
//         border: "5px solid grey",
//         duration: 2,
//         ease: "bounce",
//     });
//     tl.from(
//         ".circle",
//         {
//             y: "random(-200, 200)",
//             opacity: 0,
//             duration: 1,
//             stagger: 0.15,
//         },
//         "+=1"
//     );
// });

// onUnmounted(() => {
//   ctx.revert(); // <- Easy Cleanup!
// });
</script>