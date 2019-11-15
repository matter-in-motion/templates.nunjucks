# Matter In Motion. Nunjucks templates

[![NPM Version](https://img.shields.io/npm/v/@matter-in-motion/templates.nunjucks.svg?style=flat-square)](https://www.npmjs.com/package/@matter-in-motion/templates.nunjucks)
[![NPM Downloads](https://img.shields.io/npm/dt/@matter-in-motion/templates.nunjucks.svg?style=flat-square)](https://www.npmjs.com/package/@matter-in-motion/templates.nunjucks)

**Node.js framework for building applications (cli, server, etc...).**

## Nunjucks

[Nunjucks templates](https://mozilla.github.io/nunjucks) extension for [matter in motion](https://github.com/matter-in-motion/mm) framework

### Installation

`npm i @matter-in-motion/templates.nunjucks`

## Usage

1. Add `templates.nunjucks` to your extensions in the settings.

```js
const env = app.require('templates.nunjucks');
env.renderString('Hello {{ name }}', { name: 'World' });
```

## Settings

Add `nunjucks` section to your settings with path to templates.

- **path** — string, path to where your templates live
- global — object, global variables to add to an environment context
- extensions — array of nunjucks extensions that would be added to nunjucks environment
- options - [nunjukcs options](https://mozilla.github.io/nunjucks/api.html#configure)

License: MIT.
