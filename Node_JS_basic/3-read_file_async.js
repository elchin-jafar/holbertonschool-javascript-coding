/* eslint-disable */
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
      } else {
        const rows = data.split('\n').filter((row) => row.trim() !== '');
        const totalStudents = rows.length - 1;
        const fieldCounts = {};
        for (let i = 1; i < rows.length; i++) {
          const fields = rows[i].split(',');
          for (let j = 0; j < fields.length; j++) {
            const fieldName = fields[j].trim();
            if (fieldName !== '') {
              if (!fieldCounts[fieldName]) {
                fieldCounts[fieldName] = [];
              }
              fieldCounts[fieldName].push(fields[0].trim());
            }
          }
        }
        console.log(`Number of students: ${totalStudents}`);
        for (const field in fieldCounts) {
          console.log(
            `Number of students in ${field}: ${
              fieldCounts[field].length
            }. List: ${fieldCounts[field].join(', ')}`
          );
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
