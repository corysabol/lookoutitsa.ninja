import games from './_games.js';

// construct a map and lookup the game by it's slug
const lookup = new Map();
games().forEach(game => {
  lookup.set(game.slug, JSON.stringify(game));
});

export async function get(req, res, next) {
  const {slug} = req.params;
  if (lookup.has(slug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(lookup.get(slug));
  }
}