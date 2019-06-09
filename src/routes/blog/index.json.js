import posts from './_posts.js';

export async function get(req, res) {
  const contents = JSON.stringify(posts());
  console.log(contents);
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
