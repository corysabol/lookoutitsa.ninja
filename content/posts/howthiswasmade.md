@@@@@
title: "Sapper + Svelte + CircleCI + Github Pages = Ninjatastic"
date: "2019/06/12"
summary: "Have you ever wanted to build a static web site with Sapper + Svelte + CircleCI + Github Pages? Well have I got just the thing for you."
author: "Cory Sabol"
@@@@@

## Motivation

Well, you see I've owned the lookoutitsa.ninja domain for a good while now.
I never really got around to doing anything with it though. Then pretty recently I learned of
[Sapper](https://sapper.svelte.dev/). In an effort to learn Sapper and Svelte I decided that I would finally put something up on
the net at lookoutitsa.ninja. As I began hacking away with Sapper + Svelte I realized that what I really
wanted was a static site that allowed me to post blogs written using markdown which was deployed to
Github pages for easy hosting.

So, I built that exact thing and had a blast doing it! So, buckle up my ninja friends. This blog post
is going to show you exactly how I built this very site that you're reading this post on right now :)

## Enter Sapper + Svelte + CircleCI + Github Pages

![](/techstacklogos.png)

For this website I wanted it to meet a few criteria:

- Be fast
  - This meant that it was likely going to need to be a static site
- Be simple and clean in design
- Be easy to maintain
- Support authoring blog posts in markdown (but isn't it a static site tho? We'll get to that)

So, having also just learned of [Svelte](https://svelte.dev/), which is designed to build fast slim web UI's (the word literally means slim or slender), I decided that it might be good fit and that I would like an excuse to give it a shot. But I still needed a way to generate a static site. Well that's where [Sapper](https://sapper.svelte.dev/) comes into play.

> "Sapper is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing."

> "Unlike single-page apps, Sapper doesn't compromise on SEO, progressive enhancement or the initial load experience — but unlike traditional server-rendered apps, navigation is instantaneous for that app-like feel."

That was taken straight from the Sapper web site. So, it seems like it is intended for speed, light foot print, and also supports server-side rendering. That last part is really important as I wanted this site to be static!

I also needed this site to be easy to maintain. For that [CircleCI] came to the rescue. It was pretty trivial to setup a simple CD pipeline which would trigger a build of the site on every commit to the master branch. You can see the config for that [here](https://github.com/corysabol/lookoutitsa.ninja/blob/master/.circleci/config.yml) (yeah, yeah I know there is no test job as of this writing. I'm getting to it...).

Lastly, I needed somewhere to host my static site. Preferably somewhere really cheap, or hell even free. But where would such a place possibly exist?

...

Github, that's where! As many of you probably know, Github provides free hosting of static content for use with it's Github Pages. This is actually perfect for my needs as I can point a domain at it and push static content to the `gh-pages` branch, and we're all good!

## The Setup

![](https://media.giphy.com/media/ZFbvG2eF923te/giphy.gif)

Alright, let's get to the juicy stuff. The setup / implementation!

Just to recap, I used the following tech stack:

- [Sapper](https://sapper.svelte.dev/)
- [Svelte](https://svelte.dev/)
- [CircleCI](https://circleci.com)
- [Github Pages](https://pages.github.com/)

This is how I implemented, automated builds and deployment, and hosted the static site.

First I made sure that Sapper was installed:

```bash
npx degit "sveltejs/sapper-template#rollup" lookoutitsa.ninja
cd lookoutitsa.ninja
npm install # or yarn!
npm run dev
```

This clones one of the Sapper templates so that we have a base web app to start working from, and installs all the deps, etc.

Then because I wanted to parse markdown blog posts into html and handle some simple frontmatter metadata, I needed to install the following packages:

- [marked](https://github.com/markedjs/marked)
- [js-yaml](https://github.com/nodeca/js-yaml)

After that I spent some time reading the [Sapper Docs](https://sapper.svelte.dev/docs), which are great.

I also needed to make sure my domain would point to Githubs DNS servers. I used Namecheap for my domain, you can find some [instructions here](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages) on how to do that. YMMV though. If you're following along with this and using something other than Namecheap, just google around a bit :)

After that I simply created a repo on Github called [lookoutitsa.ninja](https://github.com/corysabol/lookoutitsa.ninja) and pushed my sample project to it.

After that it was time to move into setting up the CI/CD pipeline with CircleCI.

## Continuous Deployment

First I had to simply create an account on CircleCI, which was super easy. I just logged in using Github and configured my repo to be tracked with CircleCI. It's free for public repositories :D

I'm going to spare myself from writing all the mundane details of getting setup with CirleCI and suggest that if you're follwoing along, please consult the [CircleCI docs on open source projects](https://circleci.com/docs/2.0/oss/).

Let's take a look at the `.circleci/config.yml` file that I had put together for this project.

```yaml
version: 2.1

jobs:
  build:
    docker:
      - image: node
    steps:
      - checkout
      - run:
          name: build project
          command: |
            npm install
            npm run export
            cp CNAME __sapper__/export/CNAME
            cp -r .circleci/ __sapper__/export/.circleci/
            cp __sapper__/export/404/index.html __sapper__/export/404.html
      - persist_to_workspace:
          root: __sapper__
          paths: export/*
  deploy:
    docker:
      - image: node
    steps:
      - checkout
      - attach_workspace:
          at: __sapper__
      - add_ssh_keys:
          fingerprints:
            - 'd0:b7:4d:73:27:2b:b9:0c:8c:a1:37:4e:54:a1:b8:90'
      - run:
          name: install gh-pages npm package
          command: |
            npm install -g --silent gh-pages
            git config user.email "ci-build@lookoutitsa.ninja"
            git config user.name "ci-build"
      - run:
          Name: Deploy static site to gh-pages branch
          command: gh-pages -t --dist __sapper__/export/

workflows:
  version: 2
  main:
    jobs:
      - build:
          filters:
            branches:
              only: master
      - deploy:
          requires:
            - build
          filters:
            branches:
              only: master
```

That's a decent amount to take in, so I'll break it down.

Let's look at the first job first:

```yaml
version: 2.1

jobs:
  build:
    docker:
      - image: node
    steps:
      - checkout
      - run:
          name: build project
          command: |
            npm install
            npm run export
            cp CNAME __sapper__/export/CNAME
            cp -r .circleci/ __sapper__/export/.circleci/
            cp __sapper__/export/404/index.html __sapper__/export/404.html
      - persist_to_workspace:
          root: __sapper__
          paths: export/*
```

Above you can see the `jobs` key which specifies the jobs that CircleCI should run and
how to run the. Then there is the `build` job. The build job breaks down into plain English as follows:

1. Use docker for the job environment

   - Specifically use a node image

2. Run the following steps in the environment

   - `checkout` the git repo into our environment
   - install the deps with `npm install`
   - build the sapper static site with `npm run export`
   - copy the `CNAME` file into the static export to preserve custom domain settings
   - copy the `circleci` configuration to the static export to make sure branch whitelists work
   - copy the exported `404/index.html` file to the root of the export as `404.html`
     - this allows the github pages 404 page to be overidden with our own
   - next `persist` the dir `__sapper__/export/*` to the workspace to be used in the next job
     - This is so that we have the static files available to the next job for deployment

Alright, now we can move on to the second job, `deploy`:

```yaml
deploy:
  docker:
    - image: node
  steps:
    - checkout
    - attach_workspace:
        at: __sapper__
    - add_ssh_keys:
        fingerprints:
          - 'd0:b7:4d:73:27:2b:b9:0c:8c:a1:37:4e:54:a1:b8:90'
    - run:
        name: install gh-pages npm package
        command: |
          npm install -g --silent gh-pages
          git config user.email "ci-build@lookoutitsa.ninja"
          git config user.name "ci-build"
    - run:
        Name: Deploy static site to gh-pages branch
        command: gh-pages -t --dist __sapper__/export/
```

I'll break the above job down into plain English like before:

1. Use docker for the job environment

   - Specfically use a node image

2. Run the following steps in the environment

   - `checkout` the git repo into out environment
   - `attach` the previously persisted directory to the `__sapper__` dir
   - specify the `ssh key` to use based on it's fingerprint
     - please refer to the [CircleCI docs](https://circleci.com/docs/2.0/gh-bb-integration/#enable-your-project-to-check-out-additional-private-repositories) on how to set up a key pair for your project
   - install a npm package called `gh-pages`
     - This makes it easier to deploy static assets to a repos gh-pages branch
   - configure the `git email` and `git username`
   - Run the `gh-pages` tool with `-t` to make sure hidden files get pushed as well
     - this is important so that the `.circleci` dir will get pushed
     - this command pushes the files found in `__sapper__/export` to the `gh-pages` branch

Phew, okay let's hurry onto the last part!

```yaml
workflows:
  version: 2
  main:
    jobs:
      - build:
          filters:
            branches:
              only: master
      - deploy:
          requires:
            - build
          filters:
            branches:
              only: master
```

The yaml above simply defines the order in which to run the jobs and for which branches to run them. You can see that I have this workflow to only execute for the `master` branch.

That's really it for setting up the continuous deployment of the site. Pretty simple, which is how I like it!

## Markdown Blog Posts with Frontmatter

Alright, so this is something that I really like about this setup. The ability to write my posts in markdown and then have them be compiled to HTML as part of the site's build process. Sapper makes this pretty easy to accomplish.

Let's look at the follwoing file - `src/routes/blog/_posts.js`

```js
// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

import fs from 'fs';
import path from 'path';
import marked from 'marked';
import yaml from 'js-yaml';
import hljs from 'highlight.js';

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

      marked.setOptions({
        gfm: true,
        headerIds: true,
        highlight: (code, lang) => {
          console.log(hljs.highlight(lang, code).value);
          return hljs.highlight(lang, code).value;
        },
      });

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
```

I'm not going to break that one down part by part because I'm lazy. But I will explain why it's named like it is and what exactly it does.

First off the file is named `_posts.js` and placed under `src/routes/blog/`. The directory simply allows this file to be colocated with the Svelte templates that use it. The name `_posts.js` is important in that the `_` tells Sapper not to build the file as a URL route. See [Sapper routing](https://sapper.svelte.dev/docs#Routing).

The code in this file reads in all markdown files under `content/posts` in the project repo and parses some custom frontMatter metadata about the post out of the file by grabbing the yaml between the two `@@@@@` lines. Then it uses `marked` and `hightlight.js` to parse the markdown to HTML and provide syntax highlight for the code blocks.

Finally, it returns a list of objects which contain the fronMatter metadata, the html content, the URL slug, and the filename.

A sample markdown blog post looks like the following:

```md
@@@@@
title: "title"
date: "yyyy/mm/dd"
author: "Author Name"
summary: "Summary of the post"
@@@@@

## Markdown post content here
```

I think that the frontMatter fields are pretty self explanatory :)

Okay, the next file that is important to the blog posts working the way that they do is the `src/routes/blog/[slug].json.js` file.

```js
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
```

This bit of code does a few things and again has a pretty important name. The name `[slug].json.js` means that Sapper will make the URL slug value available to the JS in this file post build. The URL slug is simply the ending value of the restful URL. So, something like `/blogs/myawesomepost` would result in a slug value of `myawesomepost` being made available to the context of that JavaScript code.

With that knowledge I can move on to explaining what the file does. It imports the previously discussed `_posts.js` file and then constructs a map of each of the parsed markdown posts where the key value of the map is the filename of the post without the file extension on it. It then exports an `async` function called `get` which uses the `slug` value to lookup the proper blog post by the url slug and then returns a JSON string representation of the post. The cool thing about this is that when Sapper builds the application it will compile this code into a route within `server.js` which will then act as a REST API to the client side code for retrieving specific blog posts. Neato!

Lastly I want to show the `src/routes/blog/[slug].svelte` file, which is the HTML template which handles rendering the blog post data. Again, just like the last file the URL `slug` is made available to this file.

```html
<script context="module">
  import Post from '../../components/Post.svelte';
  import {onMount} from 'svelte';

  export async function preload({params, query}) {
    const {slug} = params;

    const res = await this.fetch(`blog/${slug}.json`);

    if (res.status === 200) {
      const content = await res.json();
      return {content};
    }

    this.error(404, 'No dice, Ace.');
  }
</script>

<script>
  export let content;
</script>

<svelte:head>
  <title>{content.title}</title>
</svelte:head>

<Post content="{content}"></Post>
```

The code in the top most `<script>` tags of this file simply exports a function called `Preload` which Sapper will use to fetch the blog JSON data from the file previously described using the `slug` value and set it into a module level value called `content` which is exposed in the second `<script>` tags. This content object is then passed to a simple component called Post which uses the data within it's HTML content.

Now that's all well and good, but none of this is actually static. Sapper generated a `server.js` file which is intnded to be used as the backend of the app. That won't work for hosting on Github Pages! That's okay though, when the build job runs the `npm run export` command Sapper builds the app and hosts the server locally and then crawls the app for all linked content and exports it to static files. So, as long as a page is reachable by `<a>` tags within the app it will get exported to a static file :D Pretty damn cool if you ask me.

That wraps up how the markdown blog posts are rendered as part of the site build step, so let's move on to how I actually author new posts for the site.

## Authoring Blog Posts

Writing new posts is really simple. I just fire up my favorite editor, which happens to be vim, and I create a new branch for working on the post. Then I create a new markdown file or edit a previous one under the `content/posts/` dir of the project. Once I'm done working I can push that up to github for safe keeping and then whenever I'm ready for it be published to the site, I can just merge the branch into master, which triggers the jobs in CircleCI, thus building a new version of the static site and pushing it to the `gh-pages` branch. Pow, easy peasy.

## Conclusion

Obviously, this is not the most user friendly way of doing something like this, and it requires a new build every time I want to change something. Also, if I want to keep posts in a github branch as I'm working on the content, the post is public while in a draft state through the repo itself.

However, none of these are really issues for me, and I'm really happy with this setup and with Sapper and Svelte. They are awesome tools that deliver an enjoyable dev experience.

I also recognize that there are a ton of other blog post out there about how to use Github Pages as a bloggin platform and that the concepts here are really nothing new. But I did not find much out there about how to use the awesome Sapper and Svelte to create such a web page. If you're curious you can view the source for this site [here](https://github.com/corysabol/lookoutitsa.ninja).

There's still a lot I want to do with this project such as:

- implement a better night / dark theme
- imporove the CSS styling and overall visual design
- implement non-invasive, non-tracking (no cookies), analytics
  - basically just page views, I may do this with an AWS lambda and some other stuff
- and many more fun thing

Thanks for reading, fellow Ninja.
