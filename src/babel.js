import { transform } from 'babel-core';
import path from 'path';

const defaultConfig = {
  babelrc: true,
  extends: path.resolve(__dirname, '../.babelrc')
};

export default function(source, config = {}) {
  return transform(source, {
    ...defaultConfig,
    ...config
  }).code;
}
