import posts from './_posts.js';

export function get(req, res) {
  contents = JSON.stringify(posts());
  console.log(contents);
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
