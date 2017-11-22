import * as compiler from 'vue-template-compiler';
import parseTemplate from './template';
import inject from './inject';
import babel from './babel';

module.exports = function(code, config = {}) {
  const { script, template, styles } = compiler.parseComponent(code);

  const render = parseTemplate(template, config.template);
  const js = babel(inject(script.content, render), config.babel);
  return { js, css: styles };
}
