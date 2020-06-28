import Base from "../Base";

class Navbar extends Base {

    get signinButton() {
        return $('#signin_button');
    }

    get insideNavBar() {
        return $('.nav-tabs');
    }

    get settingsButton() {
        return $('.icon-cog');
    }

    get helpButton() {
        return $('#help_link')
    }

    signinButtonIsVisible() {
        this.signinButton.waitForExist();
    }

    clickSignin() {
        this.signinButton.waitForExist();
        this.signinButton.click();
    }

    insideNavbarIsVisible() {
        this.insideNavBar.waitForExist();
    }

    clickSettings() {
        this.settingsButton.waitForExist();
        this.settingsButton.click();
    }

    clickHelp() {
        this.helpButton.waitForExist();
        this.helpButton.click();
    }

    get searchBox() {
        return $('#searchTerm')
    }

    search(text) {
        this.searchBox.waitForExist();
        this.searchBox.setValue(text);
        browser.keys('Enter');
    }
}

export default new Navbar();