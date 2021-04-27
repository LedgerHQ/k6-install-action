const { execSync } = require('child_process')

console.log(`INSTALLING K6`);

execSync('sudo dnf install https://dl.k6.io/rpm/repo.rpm', {stdio: 'inherit'})
execSync('sudo dnf install k6', {stdio: 'inherit'})

console.log(`K6 INSTALLED SUCCESSFULLY`);
