<template>
  <input
    type="number"
    :min="0"
    :max="1000000000"
    id="crypto"
    class="input"
    @input="store.setAmount($event.target.value)"
    placeholder="Введите число"
  />
  <br />
  <button class="button" @click="store.convert()">Конвертировать</button>
  <button class="button favorite-button" @click="store.addToFavorite()">В избранное</button>
</template>

<script setup>
import { useCryptoStore } from '@/stores/crypto'

const store = useCryptoStore()
</script>

<style scoped lang="scss">
.input {
  width: var(--input-width);
  margin-top: var(--spacing-md);
  padding: var(--spacing-xxxs) var(--spacing-xxs);
  border: 2px solid var(--color-white);
  border-radius: var(--spacing-xs);
  outline: none;
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-item);
  &:focus {
    outline: none;
    border-color: var(--color-primary);
  }
}
.button {
  margin-top: var(--spacing-md);
}
.favorite-button {
  margin-left: var(--spacing-md);
}
</style>
