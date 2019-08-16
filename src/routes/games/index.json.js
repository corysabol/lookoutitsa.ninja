import games from './_games.js';

export async function get(req, res) {
  const contents = JSON.stringify(games());
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(contents);
}