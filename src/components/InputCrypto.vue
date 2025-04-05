<template>
  <input
    type="number"
    :min="0"
    :max="1000000000"
    id="crypto"
    class="input"
    @input="changeAmount($event.target.value)"
    placeholder="Введите число"
  />
</template>

<script setup>
defineProps({
  changeAmount: {
    type: Function,
    required: true,
  },
})
</script>

<style scoped lang="scss">
.label {
  font-size: var(--font-size-md);
  color: var(--color-primary);
}
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
</style>
