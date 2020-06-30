import * as Config from '../lib/config'

class App {
    openHomePage() {
        browser.url(Config.baseUrl);
    }

    openLoginPage() {
        browser.url(Config.loginUrl);
    }

    openFeedbackPage() {
        browser.url(Config.feedbackUrl);
    }

    logout() {
        browser.url(Config.logoutUrl);
    }
}

export default new App()