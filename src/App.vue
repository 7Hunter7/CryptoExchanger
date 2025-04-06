<template>
  <h1>Crypto exchanger</h1>
  <input-crypto :changeAmount="changeAmount" :convert="convert" :addToFavorite="addToFavorite" />
  <p v-if="error != ''" class="error">{{ error }}</p>
  <p v-if="result != 0" class="result">{{ result }}</p>
  <favorite-convert v-if="favourites.length > 0" :favourites="favourites">
    {{ favourites }}
  </favorite-convert>
  <div class="selectors">
    <select-crypto :setCrypto="setCryptoFirst" @changeCrypto="changeCryptoFirst" />
    <select-crypto :setCrypto="setCryptoSecond" @changeCrypto="changeCryptoSecond" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import InputCrypto from '@/components/InputCrypto.vue'
import SelectCrypto from '@/components/SelectCrypto.vue'
import FavoriteConvert from '@/components/FavoriteConvert.vue'
import CryptoConvert from 'crypto-convert'

const convertor = new CryptoConvert() // Подключаем библиотеку для конвертации криптовалют

const amount = ref(0) // Количество криптовалюты
const cryptoFirst = ref('') // Первая криптовалюта
const cryptoSecond = ref('') // Вторая криптовалюта
const error = ref('') // Ошибка
const result = ref('') // Результат конвертации
const favourites = ref([]) // Избранное

// Функция для изменения количества криптовалюты
const changeAmount = (value) => {
  amount.value = value
}

// Функции для установки криптовалют
const setCryptoFirst = (value) => {
  cryptoFirst.value = value
}
const setCryptoSecond = (value) => {
  cryptoSecond.value = value
}

// Функции для изменения криптовалют
const changeCryptoFirst = (value) => {
  cryptoFirst.value = value
}
const changeCryptoSecond = (value) => {
  cryptoSecond.value = value
}

// Функция для конвертации криптовалют
const convert = async () => {
  if (amount.value <= 0) {
    error.value = 'Введите значение больше 0'
    return
  } else if (cryptoFirst.value === '' || cryptoSecond.value === '') {
    error.value = 'Выберите криптовалюту'
    return
  } else if (cryptoFirst.value === cryptoSecond.value) {
    error.value = 'Выберите разные криптовалюты'
    return
  }
  error.value = ''

  await convertor.ready()
  // Конвертируем BTC
  if (cryptoFirst.value === 'BTC' && cryptoSecond.value === 'LTC')
    result.value = convertor.BTC.LTC(amount.value)
  else if (cryptoFirst.value === 'BTC' && cryptoSecond.value === 'ETH')
    result.value = convertor.BTC.ETH(amount.value)
  else if (cryptoFirst.value === 'BTC' && cryptoSecond.value === 'USDT')
    result.value = convertor.BTC.USDT(amount.value)
  // Конвертируем LTC
  else if (cryptoFirst.value === 'LTC' && cryptoSecond.value === 'BTC')
    result.value = convertor.LTC.BTC(amount.value)
  else if (cryptoFirst.value === 'LTC' && cryptoSecond.value === 'ETH')
    result.value = convertor.LTC.ETH(amount.value)
  else if (cryptoFirst.value === 'LTC' && cryptoSecond.value === 'USDT')
    result.value = convertor.LTC.USDT(amount.value)
  // Конвертируем ETH
  else if (cryptoFirst.value === 'ETH' && cryptoSecond.value === 'BTC')
    result.value = convertor.ETH.BTC(amount.value)
  else if (cryptoFirst.value === 'ETH' && cryptoSecond.value === 'LTC')
    result.value = convertor.ETH.LTC(amount.value)
  else if (cryptoFirst.value === 'ETH' && cryptoSecond.value === 'USDT')
    result.value = convertor.ETH.USDT(amount.value)
  // Конвертируем USDT
  else if (cryptoFirst.value === 'USDT' && cryptoSecond.value === 'BTC')
    result.value = convertor.USDT.BTC(amount.value)
  else if (cryptoFirst.value === 'USDT' && cryptoSecond.value === 'LTC')
    result.value = convertor.USDT.LTC(amount.value)
  else if (cryptoFirst.value === 'USDT' && cryptoSecond.value === 'ETH')
    result.value = convertor.USDT.ETH(amount.value)
}

// Функция для добавления в избранное
const addToFavorite = () => {
  let favouritesConvert = []

  if (cryptoFirst.value === '' || cryptoSecond.value === '') {
    error.value = 'Выберите криптовалюту'
    return
  } else if (cryptoFirst.value === cryptoSecond.value) {
    error.value = 'Выберите разные криптовалюты'
    return
  }
  error.value = ''
  // Проверяем, есть ли в localStorage избранное
  if (localStorage.getItem('favourites') === null) {
    // Добавляем новую запись в избранное
    favouritesConvert = favourites.value.push({
      from: cryptoFirst.value,
      to: cryptoSecond.value,
    })

    localStorage.setItem('favourites', JSON.stringify(favouritesConvert))
  }
  // Получаем избранное из localStorage
  favouritesConvert = JSON.parse(localStorage.getItem('favourites'))

  // Сортируем по алфавиту
  favourites.value.sort((a, b) => {
    if (a.from < b.from) return -1
    if (a.from > b.from) return 1
    return 0
  })
  // Выводим сообщение
  alert(`Конвертация ${cryptoFirst.value} в ${cryptoSecond.value} добавлена в избранное`)
}
</script>

<style scoped>
.selectors {
  width: var(--selectors-width);
  margin: 0 auto; /* Center the selectors */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
  margin-bottom: var(--spacing-md);
}
.error {
  margin-top: var(--spacing-sm);
  font-family: var(--font-family-secondary);
  font-size: var(--font-size-item);
  color: var(--color-red);
  text-shadow: 0 0 5px var(--color-red);
}
.result {
  margin-top: var(--spacing-md);
  font-family: var(--font-family-first);
  font-size: var(--font-size-title);
  color: var(--color-text-primary);
  text-shadow: var(--text-shadow);
}
</style>
