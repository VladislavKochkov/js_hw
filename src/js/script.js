'use strict';

import TaskQueue from './TaskQueue.js';

const taskQueue = new TaskQueue(1000);

taskQueue.enqueue(() => Promise.resolve('Task 1 completed'));

taskQueue.enqueue(() => Promise.resolve('Task 2 completed'));
taskQueue.enqueue(() => Promise.resolve('Task 3 completed'));

taskQueue
    .start()
    .then((message) => console.log(message))
    .catch((error) => console.log('Error:', error));
