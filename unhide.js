const fs = require('fs');
const execSync = require('child_process').execSync;
const PATH = '$HOME/Desktop';

const PREV_HIDDEN = `${PATH}/.321elifyretsym`;

execSync(`cat ${PREV_HIDDEN}`)
  .toString('utf-8')
  .trim()
  .split('\n')
  .forEach(result => {
    execSync(`mv ${PATH}/.${result} ${PATH}/${result}`);
  });