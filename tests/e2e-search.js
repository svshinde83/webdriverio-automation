import App from '../page-objects/App'
import Navbar from "../page-objects/components/Navbar";


describe('E2E Tests - Search', () => {

    it('Should load homepage', () => {
        App.openHomePage();
        Navbar.searchBox.waitForExist()
    });

    it('Should submit search-box', () => {
        Navbar.search('bank');
        const resultsTitle = $('h2');
        resultsTitle.waitForExist();
        expect(resultsTitle).toHaveText('Search Results:')
    })
});