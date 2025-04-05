<template>
  <ul class="list">
    <li class="list__item" @click="setCrypto('BTC')">Bitcoin</li>
    <li class="list__item" @click="setCrypto('LTC')">Litecoin</li>
    <li class="list__item" @click="setCrypto('ETH')">Ethereum</li>
    <li class="list__item" @click="setCrypto('ETC')">Ethereum Classic</li>
    <li class="list__item" @click="setCrypto('DOGE')">Dogecoin</li>
    <li class="list__item" @click="setCrypto('DASH')">Dash</li>
    <li class="list__item" @click="setCrypto('AAVE')">Aave</li>
    <li class="list__item" @click="setCrypto('ADA')">Cardano</li>
    <li class="list__item" @click="setCrypto('ALGO')">Algorand</li>
    <li class="list__item" @click="setCrypto('AVAX')">Avalanche</li>
    <li class="list__item" @click="setCrypto('BAT')">Basic Attention Token</li>
    <li class="list__item" @click="setCrypto('BCH')">Bitcoin Cash</li>
    <li class="list__item" @click="setCrypto('BNB')">Binance Coin</li>
    <li class="list__item" @click="setCrypto('CHZ')">Chiliz</li>
    <li class="list__item" @click="setCrypto('COMP')">Compound</li>
    <li class="list__item" @click="setCrypto('CRV')">Curve DAO Token</li>
    <li class="list__item" @click="setCrypto('DOT')">Polkadot</li>
    <li class="list__item" @click="setCrypto('EOS')">EOS</li>
    <li class="list__item" @click="setCrypto('FIL')">Filecoin</li>
    <li class="list__item" @click="setCrypto('FTM')">Fantom</li>
    <li class="list__item" @click="setCrypto('GRT')">The Graph</li>
    <li class="list__item" @click="setCrypto('HBAR')">Hedera Hashgraph</li>
    <li class="list__item" @click="setCrypto('HNT')">Helium</li>
    <li class="list__item" @click="setCrypto('ICP')">Internet Computer</li>
    <li class="list__item" @click="setCrypto('KSM')">Kusama</li>
    <li class="list__item" @click="setCrypto('LDO')">Lido DAO</li>
    <li class="list__item" @click="setCrypto('LINK')">Chainlink</li>
    <li class="list__item" @click="setCrypto('MANA')">Decentraland</li>
    <li class="list__item" @click="setCrypto('MATIC')">Polygon</li>
    <li class="list__item" @click="setCrypto('REN')">Ren</li>
    <li class="list__item" @click="setCrypto('SAND')">The Sandbox</li>
    <li class="list__item" @click="setCrypto('SOL')">Solana</li>
    <li class="list__item" @click="setCrypto('SUSHI')">SushiSwap</li>
    <li class="list__item" @click="setCrypto('THETA')">Theta Network</li>
    <li class="list__item" @click="setCrypto('TRX')">Tron</li>
    <li class="list__item" @click="setCrypto('USDT')">Tether</li>
    <li class="list__item" @click="setCrypto('VET')">VeChain</li>
    <li class="list__item" @click="setCrypto('WAVES')">Waves</li>
    <li class="list__item" @click="setCrypto('XLM')">Stellar</li>
    <li class="list__item" @click="setCrypto('XMR')">Monero</li>
    <li class="list__item" @click="setCrypto('XRP')">Ripple</li>
    <li class="list__item" @click="setCrypto('ZEC')">Zcash</li>
    <li class="list__item" @click="setCrypto('ZIL')">Zilliqa</li>
  </ul>
</template>

<script setup>
defineProps({
  setCrypto: {
    type: Function,
    required: true,
  },
})
defineEmits(['setCrypto'])
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
  }
}
</style>
