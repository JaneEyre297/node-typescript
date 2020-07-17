#!/usr/bin/env node

const program = require('commander');

program
  .version('1.0.0')
  .option('-p --path [path]', '上传指定目录资源到CDN')
  .option('-f --file <filename>', '上传指定资源到CDN');

program.parse(process.argv);

if (!program.args.length) program.help();
