class EmailService {
    constructor() {
        this._logs = [];
    }

    _log(message) {
        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('uk-ua', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
        });
        const logEntry = `[${formattedDate}] ${message}`;

        this._logs.push(logEntry);
        console.log(logEntry);
    }

    getLogs() {
        return [...this._logs];
    }
}

export default EmailService;
