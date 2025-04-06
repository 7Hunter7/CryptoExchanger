<template>
  <h1>Crypto exchanger</h1>
  <input-crypto :setAmount="setAmount" :convert="convert" :addToFavorite="addToFavorite" />
  <p v-if="error != ''" class="error">{{ error }}</p>
  <p v-if="result != 0" class="result">{{ result }}</p>
  <favorite-convert
    v-if="favorites.length > 0"
    :favorites="favorites"
    :getFavorite="getFavorite"
    @removeFavorite="removeFavorite"
  >
    {{ favorites }}
  </favorite-convert>
  <div class="selectors">
    <select-crypto
      :setCrypto="setCryptoFirst"
      @changeCrypto="changeCryptoFirst"
      :cryptoNew="cryptoFirst"
    />
    <select-crypto
      :setCrypto="setCryptoSecond"
      @changeCrypto="changeCryptoSecond"
      :cryptoNew="cryptoSecond"
    />
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
const {
  setAmount,
  setCryptoFirst,
  setCryptoSecond,
  convert,
  getFavorite,
  addToFavorite,
  removeFavorite,
} = store
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
