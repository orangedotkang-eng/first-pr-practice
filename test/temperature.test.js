import test from 'node:test';
import assert from 'node:assert/strict';
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  celsiusToKelvin,
} from '../src/temperature.js';

test('celsiusToFahrenheit converts freezing point', () => {
  assert.equal(celsiusToFahrenheit(0), 32);
});

test('celsiusToFahrenheit converts boiling point', () => {
  assert.equal(celsiusToFahrenheit(100), 212);
});

test('fahrenheitToCelsius converts freezing point', () => {
  assert.equal(fahrenheitToCelsius(32), 0);
});

test('fahrenheitToCelsius converts boiling point', () => {
  assert.equal(fahrenheitToCelsius(212), 100);
});

test('celsiusToKelvin converts freezing point', () => {
  assert.equal(celsiusToKelvin(0), 273.15);
});

test('celsiusToKelvin converts absolute zero', () => {
  assert.equal(celsiusToKelvin(-273.15), 0);
});
