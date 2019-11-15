'use strict';

class SimpleView {
  constructor(templateFileName, context) {
    this.file = templateFileName;
    this.context = context;
  }

  init({ logger, transport, 'templates.nunjucks': env }) {
    this.logger = logger.get('templates');
    this.transport = transport;
    this.template = env.getTemplate(this.file, true);
  }

  get(message, params) {
    // params is the URLSearchParams class instance
    this.template.render(
      {
        ...this.context,
        ...params,
        searchParams: message.url.searchParams
      },
      (error, html) => {
        if (error) {
          this.logger.error({ error }, 'Failed to render template');
          message.responseStatusCode = 500;
          this.transport.send(message);
          return;
        }

        message.responseHeaders = { 'Content-Type': 'text/html' };
        message.response = html;
        this.transport.send(message);
      }
    );
  }
}

module.exports = SimpleView;
