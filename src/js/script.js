'use strict';
import PremiumEmailService from './PremiumEmailService.js';
import EnterpriseEmailService from './EnterpriseEmailService.js';

const logSection = (title, data) => {
    console.log(`\n--- ${title} ---`);
    console.log(data);
};

const premiumService1 = new PremiumEmailService();
const premiumService2 = new PremiumEmailService();
const enterpriseService = new EnterpriseEmailService();

premiumService1.addPremiumEmail('vipclient1@premium.com');
premiumService1.addPremiumEmail('vipclient@premium.com');

logSection('premium service 1 emails', premiumService1.getPremiumEmails());

enterpriseService.addPremiumEmail('enterprise@premium.com');

enterpriseService.migratePremiumEmails(premiumService2);

logSection('premium service 2 emails', premiumService2.getPremiumEmails());
logSection('premium service 1 logs', premiumService1.getLogs());
logSection('enterprise service logs', enterpriseService.getLogs());
