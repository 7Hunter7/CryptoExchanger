import { ref } from 'vue'
import { defineStore } from 'pinia'
import CryptoConvert from 'crypto-convert'

export const useCryptoStore = defineStore('crypto', () => {
  const convertor = new CryptoConvert() // Подключаем библиотеку для конвертации криптовалют

  const amount = ref(0) // Количество криптовалюты
  const cryptoFirst = ref('') // Первая криптовалюта
  const cryptoSecond = ref('') // Вторая криптовалюта
  const error = ref('') // Ошибка
  const result = ref(0) // Результат конвертации
  const favorites = ref([]) // Избранное

  // Функция для установки количества криптовалюты
  const setAmount = (value) => {
    amount.value = value
  }

  // Функции для установки криптовалют
  const setCryptoFirst = (value) => {
    cryptoFirst.value = value
  }
  const setCryptoSecond = (value) => {
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
    try {
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
    } catch (error) {
      console.error('Error during conversion:', error)
      this.error = 'Произошла ошибка при конвертации! Пожалуйста, попробуйте позже.'
      result.value = 0
    }
  }

  // Функция для получения избранного
  const getFavorite = (index) => {
    // Устанавливаем криптовалюты
    cryptoFirst.value = favorites[index].from
    cryptoSecond.value = favorites[index].to
    // Конвертируем
    convert()
  }

  // Функция для добавления в избранное
  const addToFavorite = () => {
    if (cryptoFirst.value === '' || cryptoSecond.value === '') {
      error.value = 'Выберите криптовалюту'
      return
    } else if (cryptoFirst.value === cryptoSecond.value) {
      error.value = 'Выберите разные криптовалюты'
      return
    }
    error.value = ''

    const newFavourite = {
      from: cryptoFirst.value,
      to: cryptoSecond.value,
    }
    favorites.value.push(newFavourite)
    // Обновляем localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
    alert(`Конвертация ${cryptoFirst.value} в ${cryptoSecond.value} добавлена в избранное`)
  }

  // Функция для удаления из избранного
  const removeFavorite = (index) => {
    // Получаем избранное из localStorage
    const favoritesConvert = JSON.parse(localStorage.getItem('favorites'))
    // Удаляем элемент из массива
    favoritesConvert.splice(index, 1)
    // Сохраняем изменения в localStorage
    localStorage.setItem('favorites', JSON.stringify(favoritesConvert))
    // Обновляем массив избранного
    favorites.value = favoritesConvert
  }

  // Функция для сброса ошибок
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
    setCryptoFirst,
    setCryptoSecond,
    convert,
    getFavorite,
    addToFavorite,
    removeFavorite,
    clearError,
  }
})
