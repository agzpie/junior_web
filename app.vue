<template>
<Background />

  <div class="w-full h-screen flex mx-auto justify-center bg-slate-50">
    <TopBar :topBarItems="topBar" />
    <div class="mt-40 mx-auto flex-col">

    <Logo />

    <div class="flex-row w-full flex gap-4 mt-10">
      <MiniCard
        title="Ubrania"
        :imageSrc="img1"
        classContent="rounded-[16px]"
      />
      <MiniCard
        title="Obuwie"
        :imageSrc="img3"
        classContent="rounded-full"
      />
      <MiniCard
        title="Zabawki"
        :imageSrc="img2"
        classContent="rounded-tl-lg rounded-br-lg rounded-tr-[24px] rounded-bl-[24px]"
      />
      <MiniCard
        title="Akcesoria"
        :imageSrc="img4"
        classContent="rounded-[24px]"
      />
    </div>
  </div>
  </div>
  <Card 
    title="Kontakt"
    doublePanel=True
    :items="contactCard"
    class="mb-40"
  >
    <ul v-for="item in contactData">
      <span class="font-semibold">{{ item.key }}:</span> {{ item.value }}
    </ul>
  </Card>
  <Blob />
  <Images />
</template>

<script setup>
import { ref } from 'vue'
import Background from './components/Background.vue';
import gsap from 'gsap'
import img1 from "./assets/3d_art1.png"
import img2 from "./assets/3d_art2.png"
import img3 from "./assets/3d_art3.png"
import img4 from "./assets/3d_art4.png"

const topBar = ref([
  { name: "o nas", source: "" },
  { name: "kontakt", source: "" }
])
const contactCard = ref([
  { subtitle: "Dane" },
  { subtitle: "Mapka", image: "mapka.png" }
])
const contactData = ref([
  { key: "Właścicielka", value: "Izabela Pietralik" },
  { key: "Numer tel.", value: "123-456-789" },
  { key: "Adres", value: "Wschodnia 47, 26-500, Szydłowiec" }
])


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

// onUnmounted(() => {
//   ctx.revert(); // <- Easy Cleanup!
// });

</script>

<style>
body {
  @apply bg-slate-50;
}
</style>
