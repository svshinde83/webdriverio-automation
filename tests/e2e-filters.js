import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'
import InsideNavbar from '../page-objects/components/InsideNavbar'
import FiltersPage from "../page-objects/pages/FiltersPage";
import * as Config from "../lib/config";

describe('E2E Tests - Transactions Filter', () => {

    it('Should log into application', () => {
        App.openLoginPage();
        LoginPage.login(Config.username, Config.password);
        Navbar.insideNavbarIsVisible()
    });

    it('Should work', () => {
        InsideNavbar.clickAccountActivityTab();
        InsideNavbar.clickFiltersLink();
        FiltersPage.fillDescription('Test');
        FiltersPage.submitFilter();
        FiltersPage.resultsTableIsVisible();
        LoginPage.pauseShort();
        const message = FiltersPage.message;
        expect(message).toHaveText('No results.');
    });
});