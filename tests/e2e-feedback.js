import App from '../page-objects/App'
import FeedbackPage from "../page-objects/pages/FeedbackPage";
import * as Config from '../lib/config';

describe('E2E - Feedback', () => {
    it('Should load feedback form', () => {
        App.openFeedbackPage();
    });

    it('Should submit feedback form', () => {
        FeedbackPage.fillForm('Name', 'test@test.com', 'Subjects'
            , 'Just a message!');
        FeedbackPage.submitForm();
        expect(browser).toHaveUrl(Config.sendfeedbackUrl)
    })
});