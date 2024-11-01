export default function kelvintoFandC(value) {
  // (297.29K − 273.15) × 9/5 + 32 = 75.452°F
  //   297.29K − 273.15 = 24.14°C

  const fahrenheit = Math.floor((Number(value) - 273.15) * (9 / 5) + 32);
  const celsius = Math.floor(Number(value) - 273.15);
  return { fahrenheit, celsius };
}
