export const formatPrice = (number: number) => {
  const numberFormated = number.toFixed(2).replace('.', ',')
  return `R$ ${numberFormated}`
}