/**
 * parse HTML to render function
 */

import * as compiler from 'vue-template-compiler';
import compilerES2015 from 'vue-template-es2015-compiler';

const defaultConfig = {
  preserveWhitespace: false
};

export default function parse(template, config = {}) {
  const compiled = compiler.compile(template.content, {
    ...defaultConfig,
    ...config
  });

  if (compiled.errors.length) {
    throw new Error(
      `\n  Error compiling template:\n${pad(html)}\n` +
        compiled.errors.map(e => `  - ${e}`).join('\n') +
        '\n'
    );
  }

  return {
    render: toFunction(compiled.render),
    staticRenderFns: `[${compiled.staticRenderFns.map(toFunction).join(',')}]`
  };
}

function toFunction(code) {
  return compilerES2015(
    `var TEMP_VAR = function (){${code}}`
  ).replace('var TEMP_VAR = ', '');
}
