<template>
  <h1>Crypto exchanger</h1>
  <input-crypto :changeAmount="changeAmount" :convert="convert" />
  <div class="selectors">
    <select-crypto :setCrypto="setCryptoFirst" />
    <select-crypto :setCrypto="setCryptoSecond" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputCrypto from '@/components/InputCrypto.vue'
import SelectCrypto from '@/components/SelectCrypto.vue'

const amount = ref(0)
const cryptoFirst = ref('')
const cryptoSecond = ref('')

const changeAmount = (value) => {
  amount.value = value
}
const setCryptoFirst = (value) => {
  cryptoFirst.value = value
}
const setCryptoSecond = (value) => {
  cryptoSecond.value = value
}
const convert = () => {
  // Здесь будет логика конвертации
  console.log(`Конвертируем ${amount.value} ${cryptoFirst.value} в ${cryptoSecond.value}`)
}
</script>

<style scoped>
.selectors {
  width: var(--selectors-width);
  margin: 0 auto; /* Center the selectors */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}
</style>
