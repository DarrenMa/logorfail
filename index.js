const { log } = require('@rama41222/node-logger');
const { promisify } = require('util')
const fs = require('fs');

const logger = log({ console: true, file: false, label: 'logorfail' });

const filePath = './appfile/logorfail.log';

const sleep = promisify(setTimeout)

// get customers for domain
async function run() {
  try {
    while (fs.existsSync(filePath)) {
      logger.info(`all is good`);
      logger.info('🦄')
      await sleep(2000)
    }
    throw new Error('file is missing');
  } catch (error) {
    throw error;
  }
}

logger.info('logorfail started');

run();
