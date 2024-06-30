const { exec } = require('child_process');
const fs = require('fs');

const iterations = 15;
const logFile = 'build-times.log';

fs.writeFileSync(logFile, '', { flag: 'w' }); // Clear the log file

const buildCommands = [
  'ng build'
];

function getTimeInMilliseconds() {
  return new Date().getTime();
}

async function runBuildIteration(iteration) {
  console.log(`Starting build iteration ${iteration}...`);

  const startTime = getTimeInMilliseconds();

  for (const command of buildCommands) {
    await new Promise((resolve, reject) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing command: ${command}`, stderr);
          reject(error);
        } else {
          console.log(stdout);
          resolve();
        }
      });
    });
  }

  const endTime = getTimeInMilliseconds();
  const buildTime = endTime - startTime;

  const logMessage = `Iteration ${iteration}: Build completed in ${buildTime} milliseconds.`;
  console.log(logMessage);
  fs.appendFileSync(logFile, `${new Date()}: ${logMessage}\n`);
}

(async () => {
  for (let i = 1; i <= iterations; i++) {
    await runBuildIteration(i);
  }

  console.log(`All builds completed. Build times are logged in ${logFile}`);
})();
