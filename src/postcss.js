import "babel-polyfill";
import postcss from 'postcss';

export default async function(source, plugins) {
  if (!source || !source[0]) {
    return '';
  }

  const { content } = source[0];

  if (!plugins) {
    return content;
  } else {
    const result = await postcss(plugins).process(content);
    return result.css;
  }
}
