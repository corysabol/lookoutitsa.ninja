// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

import fs from 'fs';
import path from 'path';
import marked from 'marked';
import yaml from 'js-yaml';

const parseFrontMatter = text => {
  const regex = /@@@@@\n*(.*?)\n*@@@@@\n*(.*)/gms;
  const match = regex.exec(text);
  const frontMatter = match[1];
  const body = match[2];
  // parse the front matter to json
  return {
    frontMatter: yaml.safeLoad(frontMatter),
    markdown: body,
  };
};

export default () =>
  fs
    .readdirSync(`content/posts`)
    .filter(file => file[0] !== '.' && path.extname(file) === '.md')
    .map(file => {
      const markdown = fs.readFileSync(`content/posts/${file}`, 'utf-8');
      //const { content, metadata } = process_markdown(markdown);
      //TODO syntax highlighting

      // Parse the front matter
      const parsed = parseFrontMatter(markdown);
      const html = marked(parsed.markdown);
      return {
        title: parsed.frontMatter.title,
        date: parsed.frontMatter.date,
        summary: parsed.frontMatter.summary,
        author: parsed.frontMatter.author,
        html,
        slug: file.replace(/^\d+-/, '').replace(/\.md$/, ''),
        file,
      };
    });
