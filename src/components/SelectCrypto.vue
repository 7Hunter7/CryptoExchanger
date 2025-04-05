<template>
  <ul class="list">
    <li class="list__item" @click="selectCrypto('BTC')" :class="current === 'BTC' ? 'active' : ''">
      Bitcoin
    </li>
    <li class="list__item" @click="selectCrypto('LTC')" :class="current === 'LTC' ? 'active' : ''">
      Litecoin
    </li>
    <li class="list__item" @click="selectCrypto('ETH')" :class="current === 'ETH' ? 'active' : ''">
      Ethereum
    </li>
    <li
      class="list__item"
      @click="selectCrypto('USDT')"
      :class="current === 'USDT' ? 'active' : ''"
    >
      Tether
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  setCrypto: {
    type: Function,
    required: true,
  },
})

const emit = defineEmits(['setCrypto'])
const current = ref('')

// Выбор криптовалюты
const selectCrypto = (value) => {
  current.value = value
  emit('setCrypto', value)
}
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
