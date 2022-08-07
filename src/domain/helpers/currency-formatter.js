const PRICE_TYPES = {
  STANDARD: 'standard',
  PROMOTION: 'promotion',
  PERCENTAGE: 'percentage',
};

export function evaluateValue(original, discount) {
  return (original - original * discount).toFixed(2);
}

export function formatter(amount) {
  const numberFormat = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'COP',
    useGrouping: true,
    maximumSignificantDigits: 2,
  });
  return `$ ${numberFormat.format(amount)}`;
}

export function getPrices(price, discount) {
  const pricesFormatted = {
    standard: 0,
    promotion: 0,
    percentage: 0,
  };

  pricesFormatted[PRICE_TYPES.STANDARD] = price;
  pricesFormatted[PRICE_TYPES.PERCENTAGE] = discount * 100;

  if (pricesFormatted.percentage) {
    pricesFormatted[PRICE_TYPES.PROMOTION] = evaluateValue(price, discount);
  }

  return pricesFormatted;
}
