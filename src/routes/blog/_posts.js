// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

import fs from 'fs';
import path from 'path';
import marked from 'marked';

export default () =>
  fs
    .readdirSync(`content/posts`)
    .filter(file => file[0] !== '.' && path.extname(file) === '.md')
    .map(file => {
      const markdown = fs.readFileSync(`content/posts/${file}`, 'utf-8');
      //const { content, metadata } = process_markdown(markdown);
      //TODO syntax highlighting

      const html = marked(markdown);
      return {
        html,
        slug: file.replace(/^\d+-/, '').replace(/\.md$/, ''),
        file,
      };
    });
