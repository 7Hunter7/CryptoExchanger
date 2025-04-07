<template>
  <ul class="list">
    <li
      class="list__item"
      @click="$emit('click', 'BTC')"
      :class="cryptoNew === 'BTC' ? 'active' : ''"
    >
      Bitcoin
    </li>
    <li
      class="list__item"
      @click="$emit('click', 'LTC')"
      :class="cryptoNew === 'LTC' ? 'active' : ''"
    >
      Litecoin
    </li>
    <li
      class="list__item"
      @click="$emit('click', 'ETH')"
      :class="cryptoNew === 'ETH' ? 'active' : ''"
    >
      Ethereum
    </li>
    <li
      class="list__item"
      @click="$emit('click', 'USDT')"
      :class="cryptoNew === 'USDT' ? 'active' : ''"
    >
      Tether
    </li>
  </ul>
</template>

<script setup>
defineProps({
  cryptoNew: {
    type: String,
    required: true,
  },
})

defineEmits(['click'])
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
