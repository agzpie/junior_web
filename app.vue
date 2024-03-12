<template>
  <div class="w-full h-screen flex mx-auto justify-center">
    <TopBar :topBarItems="topBar" />
    <div flex flex-row>
      <img src="assets/collage3x.png" class="absolute top-4 right-16 w-2/3"/>
      <img src="assets/logo.png" class="top-60 left-16 w-1/2 absolute"/>
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
</template>

<script setup>
import { ref } from 'vue'

const topBar = ref([
  { name: "Home", source: "" },
  { name: "Media", source: "" },
  { name: "Contact", source: "" }
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
