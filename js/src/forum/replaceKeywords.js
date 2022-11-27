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

  const mappings = {
    "cdn.jsdelivr.net": "testingcf.jsdelivr.net"
  }

  if (mappings === {}) return;
  if (Object.keys(mappings).length === 0) return;

  // Object.keys(mappings).filter((w) => {
  //   let regex = /<img [^>]*src=['"]([^'"]+)[^>]*>/gi;
  //   this.attrs.post.data.attributes.contentHtml = post.contentHtml().replace(regex, (match, capture) => {
  //     let fixKey = mappings[match.toLowerCase()];
  //     if (fixKey) {
  //       return fixKey;
  //     } else {
  //       return match;
  //     }
  //   });
  // });

  this.attrs.post.data.attributes.contentHtml = post.contentHtml().replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
    // console.log(match);
    // console.log(capture);
    var domain = linkUrl.split('/');
    if (domain[2]) {
        domain = domain[2];
        let fixKey = mappings[domain.toLowerCase()];
        console.log(fixKey);
          if (fixKey) {
        let fixKey = mappings[domain.toLowerCase()];
            let newUrl = match.replace(domain,fixKey)
            return newUrl;
          } else {
            return match
          }

    }else{
        return match
    }
  });
  
}
