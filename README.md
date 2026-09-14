# first-pr-practice

[![Tests](https://github.com/orangedotkang-eng/first-pr-practice/actions/workflows/test.yml/badge.svg)](https://github.com/orangedotkang-eng/first-pr-practice/actions/workflows/test.yml)

A tiny temperature conversion library for practicing pull requests.

## Installation

```bash
git clone https://github.com/<your-username>/first-pr-practice.git
cd first-pr-practice
```

No dependencies are required — it runs on Node.js 18 or newer.

## Usage

```js
import { celsiusToFahrenheit } from './src/temperature.js';

console.log(celsiusToFahrenheit(25)); // 77
```

## Running the tests

```bash
npm test
```

## License

MIT
