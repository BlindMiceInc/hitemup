import { emailTemplate } from './email-template';

export const RedirectToEmailService = new( class {
    goToGmail() {
        const { subject, message } = emailTemplate;
        window.open(`https://mail.google.com/mail/?view=cm&fm=1&su=${subject}&body=${message}`, '_blank')
    }
})();