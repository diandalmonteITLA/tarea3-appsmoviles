export function numberToWords(num) {
  const n = parseInt(num, 10);

  if (isNaN(n) || n < 1 || n > 1000) {
    return 'Por favor ingrese un número entero del 1 al 1000.';
  }

  if (n === 1000) return 'mil';
  if (n === 100) return 'cien';

  const units = ['', 'uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
  const teens = [
    'diez', 'once', 'doce', 'trece', 'catorce', 'quince',
    'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'
  ];
  const twenties = [
    'veinte', 'veintiuno', 'veintidós', 'veintitrés', 'veinticuatro',
    'veinticinco', 'veintiséis', 'veintisiete', 'veintiocho', 'veintinueve'
  ];
  const tens = ['', '', '', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
  const hundreds = [
    '', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos',
    'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'
  ];

  let result = '';

  // Cientos
  const h = Math.floor(n / 100);
  const remainder = n % 100;

  if (h > 0) {
    result += hundreds[h] + ' ';
  }

  // Decenas y unidades
  if (remainder >= 10 && remainder <= 19) {
    result += teens[remainder - 10];
  } else if (remainder >= 20 && remainder <= 29) {
    result += twenties[remainder - 20];
  } else if (remainder > 0) {
    const t = Math.floor(remainder / 10);
    const u = remainder % 10;

    if (t > 0) {
      result += tens[t];
      if (u > 0) result += ' y ' + units[u];
    } else {
      result += units[u];
    }
  }

  return result.trim();
}