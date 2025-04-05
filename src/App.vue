<template>
  <h1>Crypto exchanger</h1>
  <input-crypto :changeAmount="changeAmount" />
  {{ amount }}
  <div class="selectors">
    <select-crypto />
    <select-crypto />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputCrypto from '@/components/InputCrypto.vue'
import SelectCrypto from '@/components/SelectCrypto.vue'

const amount = ref(0)

const changeAmount = (value) => {
  amount.value = value
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
