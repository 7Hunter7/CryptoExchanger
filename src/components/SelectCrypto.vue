<template>
  <ul class="list">
    <li class="list__item">Bitcoin</li>
    <li class="list__item">ETH</li>
    <li class="list__item">USDT</li>
  </ul>
</template>

<script setup></script>

<style scoped lang="scss">
.list {
  margin-top: var(--spacing-md);
  padding: 0;
  width: var(--input-width);
  list-style: none;
  color: var(--color-primary);
  border: 2px solid var(--color-black);
  border-radius: var(--spacing-md);

  &__item {
    padding: var(--spacing-xxs) var(--spacing-xs);
    font-size: var(--font-size-base);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    &:hover,
    &:active {
      background-color: var(--background-select-color);
      text-shadow: var(--text-shadow);
    }
  }
}
</style>
