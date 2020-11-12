export function numberWithSpaces(amount: string | number) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

export function clearSymbols(value: string) {
  return value.replace(/[^0-9]/g, '');
}
