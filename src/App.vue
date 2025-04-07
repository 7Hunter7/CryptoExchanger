<template>
  <h1>Crypto exchanger</h1>
  <input-crypto />
  <p v-if="error != ''" class="error">{{ error }}</p>
  <p v-if="result != 0" class="result">{{ result }}</p>
  <favorite-convert v-if="favorites.length > 0" />
  <div class="selectors">
    <select-crypto :cryptoNew="cryptoFirst" @click="store.setCrypto('first', 'BTC')" />
    <select-crypto :cryptoNew="cryptoSecond" @click="store.setCrypto('second', 'BTC')" />
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCryptoStore } from '@/stores/crypto'
import InputCrypto from '@/components/InputCrypto.vue'
import SelectCrypto from '@/components/SelectCrypto.vue'
import FavoriteConvert from '@/components/FavoriteConvert.vue'

const store = useCryptoStore()
const { cryptoFirst, cryptoSecond, error, result, favorites } = storeToRefs(store)
</script>

<style scoped>
.selectors {
  width: var(--selectors-width);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}
.error {
  margin-top: var(--spacing-sm);
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-item);
  color: var(--color-red);
  text-shadow: 0 0 5px var(--color-red);
}
.result {
  margin-top: var(--spacing-md);
  font-family: var(--font-family-first);
  font-size: var(--font-size-title);
  color: var(--color-text-primary);
  text-shadow: var(--text-shadow);
}
</style>
