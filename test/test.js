'use strict';
const test = require('ava');
const App = require('@matter-in-motion/app');
const extension = require('../index');

process.env.NODE_ENV = '';

function createApp(logLevel = 'silent') {
  return new App({
    extensions: ['loggers.pino', extension],

    pino: {
      options: {
        level: logLevel,
        prettyPrint: true
      }
    },

    defaults: {
      logger: 'loggers.pino'
    },

    nunjucks: {
      path: './',
      global: {
        test: 'Test'
      }
    }
  });
}

test('Renders the simple string', async t => {
  const app = createApp();
  await app.start();
  const env = app.require('templates.nunjucks');
  t.is(env.renderString('Hello {{ name }}', { name: 'World' }), 'Hello World');
  t.is(env.renderString('Hello {{ test }}'), 'Hello Test');
});

