@@@@@
title: "(Draft) Sapper + Svelte + CircleCI + Github Pages = Ninjatastic"
date: "2019/06/10"
summary: "Have you ever wanted to build a static web site with Sapper + Svelte + CircleCI + Github Pages? Well have I got just the thing for you."
author: "Cory Sabol"
@@@@@

## Motivation

Well, you see I've owned lookoutitsa.ninja domain for a good while now.
I never really got around to doing anything with it though. Then pretty recently I learned of
[Sapper](). In an effort to learn Sapper and Svelte I decided that I would finally put something up on
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
- Support authoring blog posts in markdown (but isn't is a static site tho? We'll get to that)

So, having also just learned of [Svelte](https://svelte.dev/), which is designed to build fast slim web UI's (the word literally means slim or slender), I decided that it might be good fit and that I would like an excuse to give it a shot. But I still need a way to generate a static site. Well that's where [Sapper]() comes into play.

> "Sapper is a framework for building web applications of all sizes, with a beautiful development experience and flexible filesystem-based routing."

> "Unlike single-page apps, Sapper doesn't compromise on SEO, progressive enhancement or the initial load experience — but unlike traditional server-rendered apps, navigation is instantaneous for that app-like feel."

That was taken straight from the Sapper web site. So, it seems like it is intended for speed, light foot print, and also supports server-side rendering. That last part is really important as I wanted this site to be static!

I also needed this site to be easy to maintain. For that [CircleCI] came to the rescue. It was pretty trivial to setup a simple CD pipeline which would trigger a build of the site on every commit to the master branch. You can see the config for that [here](https://github.com/corysabol/lookoutitsa.ninja/blob/master/.circleci/config.yml) (yeah, yeah I know there is no test job as of this writing. I'm getting to it...).

Lastly, I needed somewhere to host my static site. Preferably somewhere really cheap, or hell even free. But where would such a place possibly exist?

...

Github, that's where! As many of you probably know, Github provides free hosting of static content for use with it's Github Pages. This is actually perfect for my needs as I can point a domain at it and push static content to the `gh-pages` branch, and we're all good!

### The Setup

![](https://media.giphy.com/media/ZFbvG2eF923te/giphy.gif)

Alright, let's get to the juciy stuff. The setup / implementation!

Just to recap, I used the following tech stack:

- [Sapper]()
- [Svelte]()
- [CircleCI]()
- [Github Pages]()

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

- [marked]()
- [js-yaml]()

After that I spent some time reading the [Sapper Docs](https://sapper.svelte.dev/docs), which are great.

I also needed to make sure my domain would point to Githubs DNS servers. I used Namecheap for my domain, you can find some [instructions here](https://www.namecheap.com/support/knowledgebase/article.aspx/9645/2208/how-do-i-link-my-domain-to-github-pages) on how to do that. YMMV though. If you're following along with this and using something other than Namecheap, just google around a bit :)

After that I simply created a repo on Github called [lookoutitsa.ninja](https://github.com/corysabol/lookoutitsa.ninja) and pushed my sample project to it.

After that it was time to move into setting up the CI/CD pipeline with CircleCI.

### Continuous Deployment

First I had to simply create an account on CircleCI, which was super easy. I just logged in using Github and configured my repo to be tracked with CircleCI. It's free for public repositories :D

I'm going to spare myself from writing all the mundane details of getting setup with CirleCI and suggest that if you're follwoing along, please consult the [CircleCI docs on open source projects](https://circleci.com/docs/2.0/oss/).

Let's take a look at the `.circleci/config.yml` file that I had put together for this project.

```js
// random js
const foo = bar => bar.baz();
foo(new Bar()).map(baz => baz * 2);
```

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

### Markdown Blog Posts with Frontmatter

Fizz

### Eye Relief for the Late Night Reader

Buzz

### Authoring Blog Posts

Bazz

### Some Shortcomings

Bingo

## Conclusion

Bango

#### Some links that you might find useful / interesting.

- http://romantsegelskyi.github.io/blog/2015/07/26/personal-page-blog/
