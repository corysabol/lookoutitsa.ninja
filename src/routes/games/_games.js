/*
pull in the games from the content/games/<gameName> dir.
This will serve up a JSON object for each game which looks like the following:

game = {
    "name": "gameName",
    "path": "pathToSrc",
    "html": "htmlSrc",
    "js": "jsSrc"
}
*/

import fs from "fs";
import path from "path";

/*
    We want to grab two files from each dir under content/games/
        gameName.html and gameName.js
    We will need to somehow render the content of these files within a Sapper template
    dynamically. The plan for now is to simply return an object literal which holds
    the data contained in both of the aforementioned files.
*/
const rootPath = `content/games`;
export default () =>
  fs
    .readdirSync(rootPath, { withFileTypes: true })
    .filter(f => f.isDirectory())
    .map(f => {
      let game = {
        name: f.name,
        slug: f.name,
        dir: path.join(rootPath, f.name)
      };
      fs.readdirSync(`${rootPath}/${f.name}`).forEach(f => {
        let suffix = f.split(".")[1];
        let filePath = path.join(game.dir, f);
        game[`${suffix}Path`] = filePath;
        game[`${suffix}Content`] = JSON.stringify(
          fs.readFileSync(filePath).toString("utf8")
        );
      });
      // write the js file over to the static dir
      //fs.writeFileSync(`static/${game.name}.js`, JSON.parse(game.jsContent));
      return game;
    });
