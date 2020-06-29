import App from "../page-objects/App";
import LoginPage from "../page-objects/pages/LoginPage";
import Navbar from "../page-objects/components/Navbar";

describe('E2E Tests - Login / Logout Flow', () => {

    it('Should not login with invalid credentials', () => {
        App.openHomePage();
        Navbar.clickSignin();
        LoginPage.pauseShort();
        LoginPage.login('invalid username', 'invalid password');
        expect(LoginPage.error).toHaveText('Login and/or password are wrong.')
    });

    it('Should login with valid credentials', () => {
        App.openHomePage();
        Navbar.signinButton;
        Navbar.clickSignin();
        LoginPage.login('username', 'password');
        Navbar.insideNavBar;
        Navbar.insideNavbarIsVisible();
    });

    it('Should logout from app', () => {
        App.logout();
        Navbar.signinButtonIsVisible()
    });
});