import test from 'node:test';
import assert from 'node:assert/strict';
import { celsiusToFahrenheit, fahrenheitToCelsius } from '../src/temperature.js';

test('celsiusToFahrenheit converts freezing point', () => {
  assert.equal(celsiusToFahrenheit(0), 32);
});

test('celsiusToFahrenheit converts boiling point', () => {
  assert.equal(celsiusToFahrenheit(100), 212);
});

test('fahrenheitToCelsius converts freezing point', () => {
  assert.equal(fahrenheitToCelsius(32), 0);
});
