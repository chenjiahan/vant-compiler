import babel from './babel';
import inject from './inject';
import parseTemplate from './template';
import * as compiler from 'vue-template-compiler';

module.exports = function(code, config = {}) {
  const component = compiler.parseComponent(code);
  const { styles, template } = component;
  const script = component.script || { content: 'export default {};' };

  let js;
  if (template) {
    const render = parseTemplate(template, config.template);
    js = babel(inject(script.content, render), config.babel);
  } else {
    js = babel(script.content, config.babel);
  }

  const css = styles && styles[0] ? styles[0].content : '';

  return { js, css };
};
