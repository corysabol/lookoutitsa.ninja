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
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json',
    });
    // Not found page.
    res.end(
      JSON.stringify({
        html:
          "<p>hi, looks like a 404... hmm. I don't know what to tell ya ¯\\_(ツ)_/¯</p>",
        slug: 'Slugs are gross',
        file: 'SlugsLife.md',
      }),
    );
  }
}
