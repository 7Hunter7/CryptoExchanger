<template>
  <h1>Crypto exchanger</h1>
  <input-crypto :changeAmount="changeAmount" :convert="convert" />
  <p v-if="error != ''">{{ error }}</p>
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
const error = ref('')

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
  if (amount.value <= 0) {
    error.value = 'Введите значение больше 0'
    return
  }
  if (cryptoFirst.value === '' || cryptoSecond.value === '') {
    error.value = 'Выберите криптовалюту'
    return
  }
  error.value = ''
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
