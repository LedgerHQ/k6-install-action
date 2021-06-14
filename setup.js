const { execSync } = require('child_process')

async function run() {
    try {
        console.info(`INSTALLING K6`);
        execSync('sudo yum install https://dl.k6.io/rpm/repo.rpm', {stdio: 'inherit'})
    } catch (error) {
        console.info(`dl.k6.io/rpm/repo.rpm is installed already!`)
    }

    execSync('sudo yum install -y --nogpgcheck k6', {stdio: 'inherit'})
    console.info(`K6 INSTALLED SUCCESSFULLY`);
}

run()
