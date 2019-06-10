import posts from './_posts.js';

const lookup = new Map();
posts().forEach(post => {
  lookup.set(post.slug, JSON.stringify(post));
});

export async function get(req, res, next) {
  const {slug} = req.params;

  if (lookup.has(slug)) {
    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    res.end(lookup.get(slug));
  }
  // don't need to res 404 here because we bake to static
  // and the server will catch a 404 and handle it.
}
