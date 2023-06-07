export default defineNuxtPlugin(() => {
  return {
    provide: {
      initprice: price => {
        const pre = price * 0.01
        const done = pre.toLocaleString('ru-RU')
        return done
      }
    }
  }
})
