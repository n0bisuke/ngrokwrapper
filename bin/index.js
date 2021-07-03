#!/usr/bin/env node
'use strict';

const program = require('commander')
const p = require('../package.json')
const ngrokServer = require('./actions/ngrok')

// バージョン情報
program
  .version(p.version, '-v, --version')

program.command(`http`)
    .description('ngrok tonnneling & Change the LINE BOT webhook URL')
    .argument('<PORT>', 'integer argument')
    .action(async (port, options, command) => {        
        const params = {
            port: port
        }
        const res = await ngrokServer(params);
        console.log(`\nForwarding ${res.url} -> http://localhost:${params.port}`);
        console.log(`...`);
    })

program.parse(process.argv)