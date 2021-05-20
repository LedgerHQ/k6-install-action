const { execSync } = require('child_process')

console.log(`REMOVE K6`);

async function run() {
    execSync('sudo yum -y remove k6', {stdio: 'inherit'})
}

run()

console.log(`K6 REMOVED SUCCESSFULLY`);
