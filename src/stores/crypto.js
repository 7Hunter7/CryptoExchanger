import { ref } from 'vue'
import { defineStore } from 'pinia'
import CryptoConvert from 'crypto-convert'

const FAVORITES_KEY = 'favorites' // Ключ для хранения избранного в localStorage

// Функция загрузки избранного из localStorage
const loadFavorites = () => {
  const storedFavorites = localStorage.getItem(FAVORITES_KEY)
  return storedFavorites ? JSON.parse(storedFavorites) : []
}

// Функция сохранения избранного в localStorage
const saveFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites))
}

export const useCryptoStore = defineStore('crypto', () => {
  const convertor = new CryptoConvert() // Подключаем библиотеку для конвертации криптовалют

  const amount = ref(0) // Количество криптовалюты
  const cryptoFirst = ref('') // Первая криптовалюта
  const cryptoSecond = ref('') // Вторая криптовалюта
  const error = ref('') // Ошибка
  const result = ref(0) // Результат конвертации
  const favorites = ref(loadFavorites()) // Инициализация избранного из localStorage

  // Функция установки количества криптовалюты
  const setAmount = (value) => {
    amount.value = value
  }

  // Общая функция установки криптовалюты
  const setCrypto = (cryptoType, value) => {
    if (cryptoType === 'first') {
      cryptoFirst.value = value
    } else if (cryptoType === 'second') {
      cryptoSecond.value = value
    }
  }

  // Функция конвертации криптовалют
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
    try {
      await convertor.ready()
      let conversionResult = 0
      // Конвертируем BTC
      if (cryptoFirst.value === 'BTC' && cryptoSecond.value === 'LTC')
        conversionResult = convertor.BTC.LTC(amount.value)
      else if (cryptoFirst.value === 'BTC' && cryptoSecond.value === 'ETH')
        conversionResult = convertor.BTC.ETH(amount.value)
      else if (cryptoFirst.value === 'BTC' && cryptoSecond.value === 'USDT')
        conversionResult = convertor.BTC.USDT(amount.value)
      // Конвертируем LTC
      else if (cryptoFirst.value === 'LTC' && cryptoSecond.value === 'BTC')
        conversionResult = convertor.LTC.BTC(amount.value)
      else if (cryptoFirst.value === 'LTC' && cryptoSecond.value === 'ETH')
        conversionResult = convertor.LTC.ETH(amount.value)
      else if (cryptoFirst.value === 'LTC' && cryptoSecond.value === 'USDT')
        conversionResult = convertor.LTC.USDT(amount.value)
      // Конвертируем ETH
      else if (cryptoFirst.value === 'ETH' && cryptoSecond.value === 'BTC')
        conversionResult = convertor.ETH.BTC(amount.value)
      else if (cryptoFirst.value === 'ETH' && cryptoSecond.value === 'LTC')
        conversionResult = convertor.ETH.LTC(amount.value)
      else if (cryptoFirst.value === 'ETH' && cryptoSecond.value === 'USDT')
        conversionResult = convertor.ETH.USDT(amount.value)
      // Конвертируем USDT
      else if (cryptoFirst.value === 'USDT' && cryptoSecond.value === 'BTC')
        conversionResult = convertor.USDT.BTC(amount.value)
      else if (cryptoFirst.value === 'USDT' && cryptoSecond.value === 'LTC')
        conversionResult = convertor.USDT.LTC(amount.value)
      else if (cryptoFirst.value === 'USDT' && cryptoSecond.value === 'ETH')
        conversionResult = convertor.USDT.ETH(amount.value)

      result.value = conversionResult
    } catch (error) {
      console.error('Error during conversion:', error)
      this.error = 'Произошла ошибка при конвертации! Пожалуйста, попробуйте позже.'
      result.value = 0
    }
  }

  // Функция получения избранного
  const getFavorite = (index) => {
    // Проверяем, что элемент с таким индексом существует в массиве
    if (index >= 0 && index < favorites.value.length) {
      cryptoFirst.value = favorites.value[index].from
      cryptoSecond.value = favorites.value[index].to
      convert()
    } else {
      console.warn(`Invalid index: ${index}`)
      error.value = 'Invalid favorite selection' // Можно добавить обработку ошибки
    }
  }

  // Функция добавления в избранное
  const addToFavorite = () => {
    if (cryptoFirst.value === '' || cryptoSecond.value === '') {
      error.value = 'Выберите криптовалюту'
      return
    } else if (cryptoFirst.value === cryptoSecond.value) {
      error.value = 'Выберите разные криптовалюты'
      return
    }
    error.value = ''

    const newFavorite = {
      from: cryptoFirst.value,
      to: cryptoSecond.value,
    }

    favorites.value = [...favorites.value, newFavorite] // Обновляем реактивное состояние
    saveFavorites(favorites.value) // Сохраняем в localStorage
    alert(`Конвертация ${cryptoFirst.value} в ${cryptoSecond.value} добавлена в избранное`)
  }

  // Функция удаления из избранного
  const removeFavorite = (index) => {
    if (index >= 0 && index < favorites.value.length) {
      const updatedFavorites = [...favorites.value] // Создаем копию массива
      updatedFavorites.splice(index, 1) // Изменяем копию
      favorites.value = updatedFavorites // Обновляем реактивное состояние
      saveFavorites(favorites.value) // Сохраняем в localStorage
    }
  }

  // Функция сброса ошибок
  const clearError = () => {
    error.value = ''
  }

  return {
    amount,
    cryptoFirst,
    cryptoSecond,
    error,
    result,
    favorites,
    setAmount,
    setCrypto, // Общая функция установки криптовалюты
    convert,
    getFavorite,
    addToFavorite,
    removeFavorite,
    clearError,
  }
})
