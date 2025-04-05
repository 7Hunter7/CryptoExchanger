<template>
  <div>
    <label for="crypto">Crypto</label>
    <input type="text" id="crypto" v-model="crypto" class="input" />
    <p>Crypto: {{ crypto }}</p>
  </div>
</template>

<script setup></script>

<style scoped>
.input {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  box-sizing: border-box;
}
</style>
