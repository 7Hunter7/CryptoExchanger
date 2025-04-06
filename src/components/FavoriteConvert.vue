<template>
  <div class="favorite">
    <h2>Favourite</h2>
    <div v-if="favorites.length > 0" class="favorite__list">
      <ul v-for="(item, index) in favorites" :key="index">
        <li @click="store.getFavorite(index)" class="favorite__item">
          <span>{{ item.from }}</span>
          <span>→</span>
          <span>{{ item.to }}</span>
          <button @click="store.removeFavorite(index)" class="favorite__button">del</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCryptoStore } from '@/stores/crypto'

const store = useCryptoStore()
const { favorites } = storeToRefs(store)
</script>

<style scoped lang="scss">
.favorite {
  width: var(--selectors-width);
  margin: var(--spacing-md) auto;
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-xs);
  border: 2px solid var(--color-black);
  border-radius: var(--spacing-md);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  h2 {
    margin-bottom: var(--spacing-sm);
    color: var(--color-text-primary);
    text-shadow: var(--text-shadow);
    font-weight: var(--font-weight-semibold);
    font-size: var(--font-size-title);
  }
  &__list {
    list-style-type: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
  }
  &__item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-primary);
    text-shadow: var(--text-shadow);
    transition: background-color 0.3s ease;
    &:hover {
      background-color: var(--background-select-color);
    }
    span {
      margin: 0 var(--spacing-xs);
    }
  }
  &__button {
    margin-left: var(--spacing-sm);
    cursor: pointer;
    color: var(--color-whit);
    background-color: var(--color-red);
    &:hover {
      background-color: var(--color-red), 10%;
    }
    &:active {
      background-color: var(--color-red), 20%;
    }
  }
}
</style>
