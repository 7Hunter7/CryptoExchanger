<template>
  <ul class="list">
    <li class="list__item">Выберите валюту</li>
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
    margin-bottom: var(--spacing-xxs);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      text-shadow: var(--text-shadow);
    }
    &:active {
      transform: scale(0.95);
    }
  }
}
</style>
