<template>
  <ul class="list">
    <li class="list__item" @click="setCrypto('BTC')" :class="cryptoNew === 'BTC' ? 'active' : ''">
      Bitcoin
    </li>
    <li class="list__item" @click="setCrypto('LTC')" :class="cryptoNew === 'LTC' ? 'active' : ''">
      Litecoin
    </li>
    <li class="list__item" @click="setCrypto('ETH')" :class="cryptoNew === 'ETH' ? 'active' : ''">
      Ethereum
    </li>
    <li class="list__item" @click="setCrypto('USDT')" :class="cryptoNew === 'USDT' ? 'active' : ''">
      Tether
    </li>
  </ul>
</template>

<script setup>
defineProps({
  setCrypto: {
    type: Function,
    required: true,
  },
  cryptoNew: {
    type: String,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.list {
  width: var(--select-width);
  margin-top: var(--spacing-md);
  padding: 0;
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
    &.active {
      background-color: var(--background-select-color);
      text-shadow: var(--text-shadow);
    }
  }
}
</style>
