import App from "../page-objects/App";
import LoginPage from "../page-objects/pages/LoginPage";
import Navbar from "../page-objects/components/Navbar";
import * as Config from "../lib/config"

describe('E2E Tests - Login / Logout Flow', () => {

    it('Should not login with invalid credentials', () => {
        App.openHomePage();
        Navbar.clickSignin();
        LoginPage.pauseShort();
        LoginPage.login(Config.invalidUsername, Config.invalidPassword);
        expect(LoginPage.error).toHaveText('Login and/or password are wrong.')
    });

    it('Should login with valid credentials', () => {
        App.openHomePage();
        Navbar.signinButton;
        Navbar.clickSignin();
        LoginPage.login(Config.username, Config.password);
        Navbar.insideNavBar;
        Navbar.insideNavbarIsVisible();
    });

    it('Should logout from app', () => {
        App.logout();
        Navbar.signinButtonIsVisible()
    });
});