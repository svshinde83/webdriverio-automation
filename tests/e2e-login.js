describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        let signinButton = $('#signin_button');
        signinButton.waitForExist()
        signinButton.click()
        $('#login_form').waitForExist()
        $('#user_login').setValue('invalid')
        $('#user_password').setValue('invalid')
        $('input[type="submit"]').click()
        const error = $('.alert-error')
        expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {
        browser.url('http://zero.webappsecurity.com/index.html')
        let signinButton = $('#signin_button');
        signinButton.waitForExist()
        signinButton.click()
        $('#login_form').waitForExist()
        $('#user_login').setValue('username')
        $('#user_password').setValue('password')
        $('input[type="submit"]').click()
        $('.nav-tabs').waitForExist()
    })

    it('Should logout from app', () => {
        let iconUser = $('.icon-user')
        let logoutLink = $('#logout_link')
        iconUser.waitForExist()
        iconUser.click()
        logoutLink.waitForExist()
        logoutLink.click()
        $('#pages-nav').waitForExist()
    })
})