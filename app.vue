<template>
<svg class="absolute" width="1440" height="3684" viewBox="0 0 1440 3684" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M318 95.0001C443.6 33.8001 732 47 786.5 50.5C841 54 848.5 10 781.5 14.5C714.5 19 558 25.5 362 0C195.5 0 -2.28882e-05 0.00012064 -2.28882e-05 0.00012064V435.869C8.20301 410.217 15.8146 390.162 20.7733 377.097L21 376.5C53.289 291.421 161 171.5 318 95.0001Z" fill="#A5C5E9"/>
  <path d="M123.5 1647C223.5 1544.67 386 1362.4 146 1128C74.8685 1058.53 28.6701 984.419 -2.28882e-05 910.669V3683.5L1440 3684.5V3323.5C1433 3332.5 1434.5 3334.5 1376 3394.5C1301.76 3470.65 1085 3605.5 899.5 3570C749.235 3541.24 704.488 3538.8 525.5 3570C307.5 3608 134 3445 89 3277.5C44 3110 138.5 2918.5 292 2807C445.5 2695.5 513 2594 464 2475.5C424.8 2380.7 245.85 2279.18 146 2199.5C-3.05176e-05 2083 -12.3306 1786 123.5 1647Z" fill="#A5C5E9"/>
</svg>

  <div class="w-full h-screen flex mx-auto justify-center bg-slate-50">
    <TopBar :topBarItems="topBar" />
    <div class="mt-40 mx-auto justify-center flex-col">
      <img src="assets/logo_3.png" class="max-w-[1200px]"/>
      <div class="flex-row w-full flex gap-4 mt-10">
        <div class="flex flex-col justify-between">
          <img src="assets/3d_art1.png" class="max-w-72 rounded-[16px]"/>
          <p class="text-yellow-300 text-[28px]">ubrania</p>
        </div>
        <div class="flex flex-col justify-between">
          <img src="assets/3d_art2.png" class="max-w-72 rounded-full"/>
          <p class="text-yellow-300 text-[28px]">obuwie</p>
        </div>
        <div class="flex flex-col justify-between">
          <img src="assets/3d_art3.png" class="max-w-72 rounded-tl-lg rounded-br-lg rounded-tr-[24px] rounded-bl-[24px]"/>
          <p class="text-yellow-300 text-[28px]">zabawki</p>
        </div>
        <div class="flex flex-col justify-between">
          <img src="assets/3d_art4.png" class="max-w-72 rounded-[24px]"/>
          <p class="text-yellow-300 text-[28px]">akcesoria</p>
        </div>
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
  <!-- <History /> -->
</template>

<script setup>
import { ref } from 'vue'

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

</script>
