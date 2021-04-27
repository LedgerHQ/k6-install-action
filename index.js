const { execSync } = require('child_process')

console.log(`INSTALLING K6`);

async function run() {
    try {
        execSync('sudo yum install https://dl.k6.io/rpm/repo.rpm', {stdio: 'inherit'})
    } catch (error) {
        console.log(error.message)
    }

    execSync('sudo yum install -y --nogpgcheck k6', {stdio: 'inherit'})
}

run()

console.log(`K6 INSTALLED SUCCESSFULLY`);
