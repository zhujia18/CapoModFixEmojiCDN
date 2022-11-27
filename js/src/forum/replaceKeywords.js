/*
 * This file is part of justoverclock/flarum-ext-keywords.
 *
 * Copyright (c) 2021 Marco Colia.
 * Special thanks to Askvortsov
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';


export default function () {
  const post = this.attrs.post;

  const mappings = JSON.parse('{ "https://cdn.jsdelivr.net":"https://testingcf.jsdelivr.net" }');
  console.log('aaaaa');
  if (mappings === {}) return;
  console.log('bbbbbb');
  if (Object.keys(mappings).length === 0) return;
  console.log('cccccc');
  // filtro per evitare il parsing doppio delle parole
  Object.keys(mappings).filter((w) => {
    let regex = new RegExp('\\b(' + w + ')\\b(?![^<]*>|[^<>]*</[^p])', 'gi');

    this.attrs.post.data.attributes.contentHtml = post.contentHtml().replace(regex, (match) => {
      let tooltip = mappings[match.toLowerCase()];
      if (tooltip) {
        console.log('dddddd');
        return '11111'
        return `<span class="definition" data-tooltip="${tooltip}">${match}</span>`;
      } else {
        console.log('eeeeee');
        return '22222'
        return match;
      }
    });
  });
}
