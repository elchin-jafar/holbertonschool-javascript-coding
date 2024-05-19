#!/usr/bin/node

const request = require('request');

request(process.argv[2], (err, res, body) => {
  if (err) console.log(err);
  else {
    const tasks = JSON.parse(body);
    const newdict = {};
    for (const task of tasks) {
      if (task.completed === true) {
        if (newdict[task.userId] === undefined) {
          newdict[task.userId] = 1;
        } else {
          newdict[task.userId] += 1;
        }
      }
    }
    console.log(newdict);
  }
});
