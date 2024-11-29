export default class TaskQueue {
    constructor(taskDelay) {
        this.taskDelay = taskDelay;
        this.tasks = [];
        this.proccesing = false;
    }

    enqueue(task) {
        this.tasks.push(task);
    }

    pause(duration) {
        return new Promise((resolve) => setTimeout(resolve, duration));
    }

    async start() {
        if (this.processing) {
            throw new Error('Task queue is already running.');
        }

        this.processing = true;

        while (this.tasks.length > 0) {
            const currentTask = this.tasks.shift();

            try {
                const result = await currentTask();
                console.log(result);
            } catch (error) {
                console.error('Task failed:', error);
            }

            await this.pause(this.taskDelay);
        }

        this.processing = false;
        return 'All tasks have been processed.';
    }
}
