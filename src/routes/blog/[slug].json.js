import posts from './_posts.js';

export async function get(req, res) {
  const {slug} = req.params;
  const post = posts.filter(p => p.slug === slug);

  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(
    JSON.stringify({
      html: '<p>hi</p>',
      slug: 'Slugs are gross',
      file: 'SlugsLife.md',
    }),
  );
}
