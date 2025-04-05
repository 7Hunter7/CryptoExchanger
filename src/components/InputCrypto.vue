<template>
  <div>
    <input type="number" id="crypto" v-model="crypto" class="input" placeholder="Введите число" />
  </div>
</template>

<script setup></script>

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
