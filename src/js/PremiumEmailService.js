import EmailService from './EmailService.js';

class PremiumEmailService extends EmailService {
    constructor() {
        super();
        this._premiumEmails = [];
    }

    static getEmailLimit() {
        return 5;
    }

    addPremiumEmail(email) {
        if (!email || typeof email !== 'string' || email.trim() === '') {
            throw new Error('invalid email format');
        }

        if (this._premiumEmails.length >= PremiumEmailService.getEmailLimit()) {
            throw new Error(
                `email limit of ${PremiumEmailService.getEmailLimit()} reached. cannot add "${email}".`
            );
        }

        this._premiumEmails.push(email);
        this._log(`premium email added: ${email}`);
    }

    getPremiumEmails() {
        return [...this._premiumEmails];
    }

    removePremiumEmail(email) {
        const index = this._premiumEmails.indexOf(email);
        if (index === -1) {
            this._log(`attempted to remove non-existent email: ${email}`);
            throw new Error(`email not found: ${email}`);
        }

        this._premiumEmails.splice(index, 1);
        this._log(`premium email removed: ${email}`);
    }

    clearPremiumEmails() {
        const count = this._premiumEmails.length;
        if (count > 0) {
            this._premiumEmails.length = 0;
            this._log(`all premium emails cleared (${count} email(s)).`);
        } else {
            this._log('no premium emails to clear.');
        }
    }
}

export default PremiumEmailService;
