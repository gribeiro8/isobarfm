export const formatNumber = (num = null) => {
  const numer = [...`${num} `].map(Number).reverse()
  const newDigits = []
  for (let i = 1; i <= numer.length; i += 1) {
    newDigits.push(numer[i])
    if (i % 3 === 0 && i !== 0 && i !== numer.length - 1) {
      newDigits.push('.')
    }
  }
  return newDigits.reverse().join('')
}
