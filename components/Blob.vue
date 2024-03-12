<template>
<img src="@/assets/slice11.png" />

<div class="container">
  <div class="wrapper">
    <div class="flair flair--1"></div>
  </div>
      <div class="wrapper">
    <div class="flair flair--3"></div>
  </div>
  <div class="wrapper">
    <div class="flair flair--2"></div>
  </div>

  <h4>Spin us, Drag us...</h4>
</div>

<!-- <div class="grid">
    <div class="grid__item pos-1">
        <div class="grid__item-img" style="background-image:url(@/assets/slice2.png);">
          <img src="@/assets/slice2.png" />
        </div>
    </div>
    <div class="grid__item pos-2">
        <div class="grid__item-img" style="background-image:url(@/assets/slice1.png);"></div>
    </div>
    <div class="grid__item pos-3">
        <div class="grid__item-img" style="background-image:url(@/assets/slice22.png);"></div>
    </div>
    ... -->
<!-- </div> -->
</template>

<script>
// import { gsap } from 'gsap/dist/gsap'
// import { TextPlugin } from 'gsap/dist/gsap/TextPlugin'
// import { ScrollTrigger } from 'gsap/dist/gsap/ScrollTrigger'
// import { Draggable } from 'gsap/dist/gsap/Draggable'
// import { InertiaPlugin } from 'gsap/dist/gsap/InertiaPlugin'

// if (process.client) {
// gsap.registerPlugin(TextPlugin, ScrollTrigger, Draggable, InertiaPlugin)
// } else {
//   console.log("problem problem")
// }

//gsap.registerPlugin(Draggable, InertiaPlugin);

// Draggable.create(".flair--1", {
//   type: "x",
//   bounds: ".container"
// });

// Draggable.create(".flair--3", {
//   type: "rotation",
//   inertia: true
// });

// Draggable.create(".flair--2", {
//   bounds: ".container",
//   inertia: true
// });

// export default class Grid {
//     constructor(el) {
//         this.DOM = {el: el};
//         this.gridItems = [];
//         this.items = [...this.DOM.el.querySelectorAll('.grid__item')];
//         this.items.forEach(item => this.gridItems.push(new GridItem(item)));
       
//         this.showItems();
//     }

// };

// const grid = new Grid(document.querySelector('.grid'));

// function showItems() {
//     gsap.timeline()
//     .set(this.items, {scale: 0.7, opacity: 0}, 0)
//     .to(this.items, {
//         duration: 2,
//         ease: 'Expo.easeOut',
//         scale: 1,
//         stagger: {amount: 0.6, grid: 'auto', from: 'center'}
//     }, 0)
//     .to(this.items, {
//         duration: 3,
//         ease: 'Power1.easeOut',
//         opacity: 0.4,
//         stagger: {amount: 0.6, grid: 'auto', from: 'center'}
//     }, 0);
// };

// class GridItem {
//     constructor(el) {
//         this.DOM = {el: el};
//         this.move();
//     }
//     //...
// };

// function move() {
//     // amount to move in each axis
//     let translationVals = {tx: 0, ty: 0};
//     // get random start and end movement boundaries
//     const xstart = getRandomNumber(15,60);
//     const ystart = getRandomNumber(15,60);
   
//     // infinite loop
//     const render = () => {
//         // Calculate the amount to move.
//         // Using linear interpolation to smooth things out.
//         // Translation values will be in the range of [-start, start] for a cursor movement from 0 to the window's width/height
//         translationVals.tx = lerp(translationVals.tx, map(mousepos.x, 0, winsize.width, -xstart, xstart), 0.07);
//         translationVals.ty = lerp(translationVals.ty, map(mousepos.y, 0, winsize.height, -ystart, ystart), 0.07);
       
//         gsap.set(this.DOM.el, {x: translationVals.tx, y: translationVals.ty});  
//         requestAnimationFrame(render);
//     }
//     requestAnimationFrame(render);
// }

</script>

<style>

.container {
  position: relative;
  width: 90vw;
  height: 90vh;
  max-width: 90vh;
  max-height: 90vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 9px;
  border: solid 2px var(--mid);
}

h4 {
  color: var(--mid);
  position: absolute;
  width: 100%;
  left: 0;
  right: 0;
  bottom: 1rem;
  text-align: center;
  pointer-events: none;
}

.flair {
  cursor: pointer;
  width: 70px;
  height: 70px;
  max-height: 15vh;
  max-width: 15vh;
}

/* .grid {
	pointer-events: none;
	position: absolute;
	width: 110%;
	height: 110%;
	top: -5%;
	left: -5%;
	display: grid;
	grid-template-columns: repeat(50,2%);
	grid-template-rows: repeat(50,2%);
}

.grid__item {
	position: relative;
}

.grid__item-img {
	position: relative;
	width: 100%;
	height: 100%;
	background-size: cover;
	background-position: 50% 50%;
}

.pos-1 {
	grid-area: 10 / 1 / 26 / 7;
}

.pos-2 {
	grid-area: 1 / 18 / 9 / 27;
}

.pos-3 {
	grid-area: 1 / 36 / 14 / 42;
}

.grid--img .grid__item {
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	will-change: transform;
}

.grid--img .grid__item-img {
	flex: none;
	width: calc(100% + 100px);
	height: calc(100% + 100px);
	will-change: transform;
} */
</style>