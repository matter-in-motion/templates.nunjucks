'use strict';
const nunjucks = require('nunjucks');

class Environment {
  initRequired = true;

  init({ app, settings }) {
    const { path, options, global, extensions } = settings.require('nunjucks');
    this.instance = nunjucks.configure(path, options);
    for (const name in global) {
      this.instance.addGlobal(name, global[name]);
    }

    if (extensions) {
      this.addExtensions(app, extensions);
    }
  }

  addExtensions(app, extensions) {
    extensions.forEach(ext => {
      let name;

      if (typeof ext === 'string') {
        name = ext;
        ext = app.loadModule(ext);
      }

      const extension = new ext();
      this.instance.addExtension(name || extension.tags[0], extension);
    });
  }
}

module.exports = Environment;
