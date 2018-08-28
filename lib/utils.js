"use strict";

exports.__esModule = true;
exports.pad = pad;

function pad(html) {
  return html.split(/\r?\n/).map(function (line) {
    return "  " + line;
  }).join('\n');
}