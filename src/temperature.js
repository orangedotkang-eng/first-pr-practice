/**
 * Convert Celsius to Fahrenheit.
 * @param {number} celsius
 * @returns {number}
 */
export function celsiusToFahrenheit(celsius) {
  return celsius * 9 / 5 + 32;
}

/**
 * Convert Fahrenheit to Celsius.
 * @param {number} fahrenheit
 * @returns {number}
 */
export function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

/**
 * Convert Celsius to Kelvin.
 * @param {number} celsius
 * @returns {number}
 */
export function celsiusToKelvin(celsius) {
  return celsius + 273.15;
}
