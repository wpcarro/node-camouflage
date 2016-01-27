const fs = require('fs');
const execSync = require('child_process').execSync;
const PATH = '$HOME/Desktop';

const PREV_HIDDEN = `${PATH}/.321elifyretsym`;

// erase contents
execSync(`> ${PREV_HIDDEN}`);

const files = execSync(`ls ${PATH}`)
  .toString('utf-8')
  .split('\n')
  .filter(file => /^[^\.]/.test(file))
  .forEach(file => {
    execSync(`echo ${file} >> ${PREV_HIDDEN}`);
    execSync(`mv ${PATH}/${file} ${PATH}/.${file}`, err => {
      if(err) return console.error(err);
      console.log(`successfully renamed ${file} to .${file}`);
    });
  });