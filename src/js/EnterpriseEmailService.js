import PremiumEmailService from './PremiumEmailService.js';

class EnterpriseEmailService extends PremiumEmailService {
    migratePremiumEmails(targetService) {
        if (!(targetService instanceof PremiumEmailService)) {
            throw new TypeError(
                'target service must be an instance of PremiumEmailService.'
            );
        }

        const emailsToMigrate = this.getPremiumEmails();
        if (emailsToMigrate.length === 0) {
            this._log('no emails to migrate.');
            return;
        }

        emailsToMigrate.forEach((email) => {
            targetService.addPremiumEmail(email);
            this._log(`Email migrated: ${email}`);
        });

        this.clearPremiumEmails();
        this._log(`${emailsToMigrate.length} email(s) successfully migrated.`);
    }

    clearPremiumEmails() {
        const emailCount = this.getPremiumEmails().length;
        if (emailCount > 0) {
            this.getPremiumEmails().length = 0;
            this._log(
                `cleared ${emailCount} premium email(s) from the current service.`
            );
        } else {
            this._log('no premium emails to clear.');
        }
    }
}

export default EnterpriseEmailService;
