#!/usr/bin/env node
'use strict';

const child_process = require('child_process');
const ls = child_process.spawn('./bin/index.js', ['http','3000']);
//   test = child_process.exec('npm test', () => {
//     server.kill()
//     process.exit()
//   })

// console.log(server);

// const ls = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

// test.stdout.pipe(process.stdout)
// const { execFileSync} = require('child_process')
// console.log(`hogehoge`);
// console.profile('MyLabel');
// console.profileEnd('MyLabel');
// const stdout = execFileSync('./bin/index.js', ['http','3000']);
// console.log('STDOUT', stdout.toString());