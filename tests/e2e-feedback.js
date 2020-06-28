import App from '../page-objects/App'
import FeedbackPage from "../page-objects/pages/FeedbackPage";


describe('E2E - Feedback', () => {
    it('Should load feedback form', () => {
        App.openFeedbackPage();
    });

    it('Should submit feedback form', () => {
        FeedbackPage.fillForm('Name', 'test@test.com', 'Subjects'
            , 'Just a message!');
        FeedbackPage.submitForm();
        expect(browser).toHaveUrl(
            'http://zero.webappsecurity.com/sendFeedback.html'
        )
    })
});