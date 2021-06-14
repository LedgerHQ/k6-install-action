const { execSync } = require('child_process')

async function run() {
    console.info(`REMOVE K6`);
    execSync('sudo yum -y remove k6', {stdio: 'inherit'})
    console.info(`K6 REMOVED SUCCESSFULLY`);
}

run()
